const express = require('express')
const app = express()

function requestTime(req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at ${new Date(req.requestTime).toString()}</small>`
  res.send(responseText)
})

app.listen(3000)
