import type commandLineArgs from 'command-line-args'
import commandLineUsage from 'command-line-usage'

export type OptionDefinitionWithDescription =
  commandLineArgs.OptionDefinition & {
    description: string
  }

const displayHelp = (
  commandLineArgsDefinitions: OptionDefinitionWithDescription[],
) => {
  console.log(
    commandLineUsage([
      {
        header: 'Mergit',
        content: 'CLI tool for merging Git branches.',
      },
      {
        header: 'Usage',
        content: 'mergit <targetBranch> [options]',
      },
      {
        header: 'Options',
        optionList: commandLineArgsDefinitions,
      },
    ]),
  )
}

export default displayHelp
