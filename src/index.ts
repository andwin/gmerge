#!/usr/bin/env node

import commandLineArgs from 'command-line-args'
import branchExistsLocally from './utils/branch_exists_locally'
import commandLineArgsDefinitions from './utils/command_line_args_definitions'
import displayHelp from './utils/display_help'
import getPackageVersion from './utils/get_package_version'
import getWorkingBranch from './utils/get_working_branch'
import hasUpstreamBranch from './utils/has_upstream_branch'
import runCommand from './utils/run_command'
import verifyPristineState from './utils/verify_pristine_state'

const commandLineArguments = commandLineArgs(commandLineArgsDefinitions)

const run = async () => {
  if (commandLineArguments.help) {
    displayHelp(commandLineArgsDefinitions)
    process.exit(0)
  }

  if (commandLineArguments.version) {
    console.log(getPackageVersion())
    process.exit(0)
  }

  const { targetBranch } = commandLineArguments
  if (!targetBranch) {
    console.error('Target branch is required')
    displayHelp(commandLineArgsDefinitions)
    process.exit(1)
  }

  if (!(await branchExistsLocally(targetBranch))) {
    console.error(`Branch ${targetBranch} does not exist locally`)
    process.exit(1)
  }

  await verifyPristineState()
  const hasUpstream = await hasUpstreamBranch(targetBranch)
  const workingBranch = await getWorkingBranch()

  // Checkout target branch
  await runCommand('git', ['checkout', targetBranch])

  // Pull changes
  if (hasUpstream) {
    await runCommand('git', ['pull'])
  }

  // Merge working branch into target branch
  await runCommand('git', ['merge', workingBranch])

  // Push changes
  if (hasUpstream) {
    await runCommand('git', ['push'])
  }

  // Checkout working branch
  await runCommand('git', ['checkout', workingBranch])
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
