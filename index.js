const { ESLint } = require('eslint')

module.exports = (files, baseConfig) => {
  const e = new ESLint({ baseConfig })

  let errorCount = -1

  return e.lintFiles(files).then(results => {
    errorCount = results.reduce((a, r) => a + r.errorCount, 0)

    return errorCount === 0
      ? Promise.resolve()
      : e.loadFormatter('stylish')
        .then(f => {
          return Promise.reject(f.format(results))
	})
  })
}
