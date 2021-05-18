const nunjucks = require('nunjucks')
// const beautify = require('js-beautify').js_beautify
nunjucks.configure({ autoescape: true })
const parse = require('./lib/parse.js')
const utils = require('./lib/utils.js')
const fs = require('fs')
const path = require('path')

module.exports = function (opt) {
  const data = parse(opt)
  const apiGroup = utils.genApiGroup(data.methods)
  const apiTemplate = fs.readFileSync(path.join(__dirname, './lib/template/axios.config.js'), 'utf-8')
  const methods = fs.readFileSync(path.join(__dirname, './lib/template/methods.njk'), 'utf-8')
  const codeResult = [{
    name: 'axios.config',
    code: codegen(apiTemplate)
  }]
  for (let i in apiGroup) {
    codeResult.push({
      name: i,
      code: codegen(methods, apiGroup[i])
    })
  }
  return codeResult
}

function codegen (template, methods) {
  return nunjucks.renderString(template, { methods })
}
