const router = require('express').Router()
const AUTH = require('./middleware/auth')

router.post('/api/auth/register', AUTH, require('./routes/auth/register'))
// router.post('/api/login', require('./routes/auth/login'))

module.exports = router
