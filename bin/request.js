const http = require('http')

module.exports = function (url) {
  return new Promise((resolve, reject) => {
    http.get(url, resp => {
      let data = ''
      resp.on('data', function (chunk) {
        data += chunk
      })
      resp.on('end', function () {
        resolve(JSON.parse(data))
      })
      resp.on('error', err => {
        reject(err.message)
      })
    })
  })
}
