const genApiGroup = (apis) => {
  const result = {}
  for (let i in apis) {
    const api = apis[i]
    const key = api.path && api.path.split('/')[1]
    if (key) {
      if (!result[key]) {
        result[key] = []
      }
      result[key].push(api)
    }
  }
  return result
}

module.exports = {
  genApiGroup
}
