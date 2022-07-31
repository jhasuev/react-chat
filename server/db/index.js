const connection = require("./connection")
const {
  object2Array,
  replaceAllAccors,
  replaceStrsToSQLFormat
} = require("../helpers/functions")

const query = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (!error) {
        resolve(results)
      } else {
        reject(error)
      }
    })
  })
}

exports.query = query

exports.insert = async (sql, obj) => {
  const [fields, values] = object2Array(obj)
  sql = replaceAllAccors(sql, [
    fields,
    replaceStrsToSQLFormat(values).join()
  ], false)

  const res = await query(sql)
  return res?.insertId
}

exports.select = async (sql, arr = []) => {
  sql = replaceAllAccors(sql, arr)
  
  const res = await query(sql)
  return res
}