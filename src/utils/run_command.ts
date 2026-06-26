import { execa } from 'execa'

const runCommand = async (file: string, args: string[]) => {
  try {
    await execa(file, args)
  } catch (e) {
    ;(e as Error).message = `Command failed: ${file} ${args.join(' ')}`
    throw e
  }
}

export default runCommand
