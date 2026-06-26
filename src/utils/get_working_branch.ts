import { execa } from 'execa'

const getWorkingBranch = async () => {
  const gitBranch = await execa`git branch --show-current`
  return gitBranch.stdout.trim()
}

export default getWorkingBranch
