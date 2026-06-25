# Mergito

A CLI tool that helps you merge Git branches.

Given a target branch, Mergito merges your current branch into that target.

## Usage

```bash
mergito <targetBranch>
```

```bash
mergito staging
```

Show help:

```bash
mergito --help
```

## Local development

Clone the repository and install dependencies:

```bash
pnpm install
```

Build the CLI:

```bash
pnpm build
```

### Run without installing globally

```bash
node dist/index.js staging
```

While developing, you can recompile automatically in one terminal:

```bash
pnpm dev
```

Then run the CLI from another terminal after each change:

```bash
pnpm build && node dist/index.js staging
```

### Install globally from your local checkout

To use the `mergito` command anywhere on your machine without publishing to npm:

```bash
pnpm build
pnpm add -g .
```

Then run it like any other CLI tool:

```bash
mergito staging
mergito --help
```

To remove the global install:

```bash
pnpm remove -g mergito
```

If the command is not found after installing globally, run `pnpm setup` and restart your terminal so pnpm's global bin directory is on your PATH.
