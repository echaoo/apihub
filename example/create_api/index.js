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
  deleteFolderRecursive(path.join(__dirname, './src/service/'))
  const jsonData = await getResource()
  const codeResult = swaggerGen(jsonData)
  fs.mkdirSync(path.join(__dirname, './src/service/'))
  fs.mkdirSync(path.join(__dirname, './src/service/apis/'))
  fs.writeFileSync(path.join(__dirname, `./src/service/apis/test.js`), 'kskkskskk')
  for (let i in codeResult) {
    const result = codeResult[i]
    fs.writeFileSync(path.join(__dirname, `./src/service/apis/${result.name}.js`), result.code)
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

/**
 *
 * @param {*} url
 */
function deleteFolderRecursive (url) {
  let files = []
  if (fs.existsSync(url)) {
    files = fs.readdirSync(url)
    files.forEach(function (file, index) {
      const curPath = path.join(url, file)
      console.log(curPath)
      /**
       * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
       */
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    /**
     * 清除文件夹
     */
    fs.rmdirSync(url)
  } else {
    console.log('给定的路径不存在，请给出正确的路径')
  }
}
