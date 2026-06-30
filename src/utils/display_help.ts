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
        header: 'Mergito',
        content: 'CLI tool for merging Git branches.',
      },
      {
        header: 'Usage',
        content: [
          'mergito [targetBranch] [options]',
          '',
          'targetBranch defaults to {bold staging} if omitted.',
        ],
      },
      {
        header: 'Options',
        hide: ['targetBranch'],
        optionList: commandLineArgsDefinitions,
      },
    ]),
  )
}

export default displayHelp
