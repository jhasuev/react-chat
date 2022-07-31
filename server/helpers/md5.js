const md5 = require('md5')
const { MD5_SECRET_PHRASE } = require('./constants')

exports.hashPassword = (str) => md5(str + MD5_SECRET_PHRASE)