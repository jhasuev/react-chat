const { hashPassword } = require('./md5')

const replaceStrsToSQLFormat = (arr = []) => {
  return arr.map(item => typeof item === 'string' ? `'${item}'` : item)
}

exports.replaceStrsToSQLFormat = replaceStrsToSQLFormat

exports.object2Array = (obj = {}) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[0].push(key)
    acc[1].push(obj[key])

    return acc
  }, [[], []])
}

exports.replaceAllAccors = (str = '', arr = [], convert2SQL = true) => {
  if (convert2SQL) {
    arr = replaceStrsToSQLFormat(arr)
  }

  while (arr.length) {
    str = str.replace('?', arr.shift())
  }

  return str
}

exports.createToken = ({ login, password }) => {
  const shuffleData = [login, password, login, password]
  return hashPassword(shuffleData.join('-'))
}