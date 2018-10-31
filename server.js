const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers_controller.js')

app.use(express.static('public'))
  .use(bodyParser.urlencoded({ extended: true}))
  .use(bodyParser.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
  .set('view engine', 'handlebars')
  .use(routes)

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT)
})


