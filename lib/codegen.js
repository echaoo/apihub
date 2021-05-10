const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')
// const beautify = require('js-beautify').js_beautify
nunjucks.configure({ autoescape: true })

const apiTemplate = fs.readFileSync(path.join(__dirname, './template/axios.config.js'), 'utf-8')
// const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
// Handlebars.registerPartial('methods', methods)
// Handlebars.registerPartial('method', method)
// Handlebars.registerHelper('toLowerCase', function (word) {
//   return word.toLowerCase()
// })
// Handlebars.registerHelper('brackets', function (word) {
//   return `{${word}}`
// })
module.exports = function (data) {
  // let template = Handlebars.compile(apiTemplate)(data)
  // template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  let template = nunjucks.renderString(apiTemplate)
  return template
}
