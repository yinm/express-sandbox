// http://expressjs.com/en/guide/using-middleware.html#middleware.built-in
const express = require('express')
const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body)
  console.log(req.body.name)

  res.send('POST request')
})

app.listen(3000)
console.log('listening on port 3000')
