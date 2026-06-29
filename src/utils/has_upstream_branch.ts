import { execa } from 'execa'

const hasUpstreamBranch = async (branch: string) => {
  try {
    await execa('git', ['rev-parse', '--verify', `${branch}@{upstream}`])
    return true
  } catch {
    return false
  }
}

export default hasUpstreamBranch
