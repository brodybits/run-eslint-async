# run-eslint-async

Run ESLint with a quick-and-easy API

**LICENSE:** [MIT license](./LICENSE.md)

## Requirements

- ESLint 7.x (peer dependency)

## demo

```js
const meow = require('meow')

const run = require('run-eslint-async')

const cli = meow(`
  Usage
  $ demo files
`)

const files = cli.input

if (files.length === 0) {
  console.error('ERROR: need some files')
  cli.showHelp()
}

console.log(`INFO: linting files: ${files}`)

const baseConfig = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'never']
  }
}

run(files, baseConfig)
  .catch(() => {
    process.exit(1)
  })
  .then(() => {
    console.log('lint ok')
  })
```

## see also

- <https://github.com/shinnn/run-eslint> - seems to be better tested, unfortunately works with outdated ESLint version
