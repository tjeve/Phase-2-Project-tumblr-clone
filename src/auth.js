module.exports = function (app) {
  const fs = require('fs')
  const authTemplate = fs.readFileSync(
    './templates/auth.mustache',
    'utf8'
  )

  app.get('/auth', function (req, res) {
    // console.log(req)
    res.send(authTemplate)
  })
}
