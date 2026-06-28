import { execa } from 'execa'

const branchExistsLocally = async (branch: string) => {
  try {
    await execa('git', [
      'show-ref',
      '--verify',
      '--quiet',
      `refs/heads/${branch}`,
    ])
    return true
  } catch {
    return false
  }
}

export default branchExistsLocally
