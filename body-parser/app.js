const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.listen(3000)
console.log('Server is online.')

app.post('/', (req, res) => {
  console.log(req.body)
  console.log(req.body.name)

  res.send('POST request to the homepage')
})
