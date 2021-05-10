const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
const utils = require('./lib/utils.js')
module.exports = function (opt) {
  let data = parse(opt)
  debugger
  const apiGroup = utils.genApiGroup(data.methods)
  let codeResult = []
  for (let i in apiGroup) {
    codeResult.push({
      name: i,
      code: codegen(data)
    })
  }
  return codeResult
}
