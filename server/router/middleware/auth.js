module.exports = (req, res, next) => {
  // FIXME вывести в отдельный файл массив unauthRoutes
  const unauthRoutes = [
    '/api/auth/register',
    '/api/auth/login',
  ]

  const [, token] = req.headers?.authorization?.split(' ')
  if (token || unauthRoutes.includes(req.url)) {
    next()
  } else {
    res.status(401).json({
      status: false,
      message: 'Unauthorized'
    });
  }
}