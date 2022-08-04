const router = require('express').Router()
const AUTH = require('./middleware/auth')

router.post('/api/auth/register', AUTH, require('./routes/auth/register'))
router.post('/api/auth/login', AUTH, require('./routes/auth/login'))

module.exports = router
