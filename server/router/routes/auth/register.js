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
    const [ alreadyHasSameLogin ] = await select(`SELECT * FROM users WHERE login = ?`, [ login ])
    if (alreadyHasSameLogin) {
      throw 'This login is busy'
    }

    const insertedId = await insert(`INSERT INTO users (?) VALUES (?)`, { login, password })
    
    // создаем токен и добавляем его в БД
    const token = createToken({ login, password })
    await insert(`INSERT INTO auth_token (?) VALUES (?)`, { user_id: insertedId, token })

    res.json({ status: "success", data: { insertedId, token } });
  } catch (error) {
    console.log('error', error);
    res.json({ status: "error", error });
  }
}