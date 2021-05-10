// const jsonData = require('../api-docs.json')

const swaggerGen = require('../../index.js')
const fs = require('fs')
const path = require('path')
const packageParams = require(path.join(__dirname, '../../package.json'))
const request = require('./request')

const apiUrl = packageParams.apihub && packageParams.apihub.url
const projectName = packageParams.apihub && packageParams.apihub.projectName

init()

async function init () {
  const jsonData = await getResource()
  const codeResult = swaggerGen(jsonData)
  fs.mkdirSync(path.join(__dirname, '../dist/apis/'))
  for (let i in codeResult) {
    const result = codeResult[i]
    fs.writeFileSync(path.join(__dirname, `../dist/apis/${result.name}.js`), result.code)
  }
}
async function getResource () {
  const resourceList = await request(`${apiUrl}/swagger-resources`)
  let docsUrl = ''
  for (let i = 0; i < resourceList.length; i++) {
    if (resourceList[i].name === projectName) {
      docsUrl = resourceList[i].location
      break
    }
  }
  const docs = await request(`${apiUrl}${docsUrl}`)
  return docs
}
