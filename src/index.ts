#!/usr/bin/env node

import commandLineArgs from 'command-line-args'
import { execa } from 'execa'
import commandLineArgsDefinitions from './utils/command_line_args_definitions'
import displayHelp from './utils/display_help'
import getWorkingBranch from './utils/get_working_branch'
import runCommand from './utils/run_command'
import verifyPristineState from './utils/verify_pristine_state'

const commandLineArguments = commandLineArgs(commandLineArgsDefinitions)

const run = async () => {
  if (commandLineArguments.help) {
    displayHelp(commandLineArgsDefinitions)
    process.exit(0)
  }

  const { targetBranch } = commandLineArguments

  await verifyPristineState()
  const workingBranch = await getWorkingBranch()

  // Checkout staging
  await runCommand(`git checkout ${targetBranch}`)

  // Pull changes
  try {
    await runCommand(`git pull`)
  } catch {
    // ignore if pull fails
  }

  // Checkout staging
  await runCommand(`git merge ${workingBranch}`)

  // Push staging
  try {
    await runCommand(`git push`)
  } catch {
    // ignore if push fails
  }

  // Checkout working branch
  await runCommand(`git checkout ${workingBranch}`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
