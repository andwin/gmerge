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
    description: 'Branch to merge into the current branch.',
  },
]

export default commandLineArgsDefinitions
