const path = require("path")
const express = require("express")
const config = require("./config")
// https://expressjs.com/en/resources/middleware/cors.html
const cors = require('cors')
// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require("./router/index"))
app.use(require("body-parser").urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.listen(config.PORT, () => {
  console.log(`Server started listening on ${config.PORT} port...`);
})