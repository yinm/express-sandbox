const express = require('express')

const app = express()

app.listen(3000)
console.log('Server is online.')

app.post('/', (req, res) => {
  res.send('POST is sended.')
})
