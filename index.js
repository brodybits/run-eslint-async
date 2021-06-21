const { ESLint } = require('eslint')

module.exports = (files, baseConfig) => {
  const e = new ESLint({ baseConfig })

  let errorCount = -1

  return e.lintFiles(files).then(results => {
    // console.log(`found lint issues: ${results.length}`)
    errorCount = results.reduce((a, r) => a + r.errorCount, 0)
    console.log(`error count: ${errorCount}`)

    return errorCount === 0
      ? Promise.resolve()
      : e.loadFormatter('stylish')
        .then(f => {
          console.log(f.format(results))
          return Promise.reject()
	})
  })
}
