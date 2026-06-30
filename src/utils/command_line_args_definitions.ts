import type { OptionDefinitionWithDescription } from './display_help'

const commandLineArgsDefinitions: OptionDefinitionWithDescription[] = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Display this usage guide.',
  },
  {
    name: 'targetBranch',
    type: String,
    defaultOption: true,
    description: 'Branch to merge the current branch into.',
    defaultValue: 'staging',
  },
  {
    name: 'version',
    alias: 'v',
    type: Boolean,
    description: 'Display the version number.',
  },
]

export default commandLineArgsDefinitions
