const { insert, select } = require("../../../db/")
const { hashPassword } = require('../../../helpers/md5')
const { createToken } = require('../../../helpers/functions')

module.exports = async (req, res) => {
  try {
    const login = req.body.login
    const password = hashPassword(req.body.password)

    if (!login || !password) {
      throw 'Not all data were filled'
    }

    // проверка на существования пользователя с таким логином
    const [ userData ] = await select(`SELECT * FROM users WHERE login = ? AND password = ?`, [ login, password ])
    if (!userData) {
      throw 'There is no such user'
    }

    delete userData.password
    
    // создаем токен и добавляем его в БД
    const token = createToken({ login, password })
    await insert(`INSERT INTO auth_token (?) VALUES (?)`, { user_id: userData.id, token })

    res.json({ status: "success", data: { token, user: userData } });
  } catch (error) {
    console.log('error', error);
    res.json({ status: "error", error });
  }
}