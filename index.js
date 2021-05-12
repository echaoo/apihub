const nunjucks = require('nunjucks')
// const beautify = require('js-beautify').js_beautify
nunjucks.configure({ autoescape: true })
const parse = require('./lib/parse.js')
const utils = require('./lib/utils.js')
const fs = require('fs')
const path = require('path')

module.exports = function (opt) {
  let data = parse(opt)
  const apiGroup = utils.genApiGroup(data.methods)
  const apiTemplate = fs.readFileSync(path.join(__dirname, './lib/template/axios.config.js'), 'utf-8')
  const methods = fs.readFileSync(path.join(__dirname, './lib/template/methods.njk'), 'utf-8')
  let codeResult = [{
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
  // let template = Handlebars.compile(apiTemplate)(data)
  // template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return nunjucks.renderString(template, { methods })
}
