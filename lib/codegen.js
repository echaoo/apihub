const nunjucks = require('nunjucks')
// const beautify = require('js-beautify').js_beautify
nunjucks.configure({ autoescape: true })
// const fs = require('fs')
// const path = require('path')
// const apiTemplate = fs.readFileSync(path.join(__dirname, './template/axios.config.js'), 'utf-8')
// const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
// Handlebars.registerPartial('methods', methods)
// Handlebars.registerPartial('method', method)
// Handlebars.registerHelper('toLowerCase', function (word) {
//   return word.toLowerCase()
// })
// Handlebars.registerHelper('brackets', function (word) {
//   return `{${word}}`
// })
module.exports = function (template, methods) {
  // let template = Handlebars.compile(apiTemplate)(data)
  // template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return nunjucks.renderString(template, { methods })
}
