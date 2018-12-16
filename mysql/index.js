const express = require('express')
const app = express()

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'NodeTest'
})

app.get('/', (req, res) => {
  connection.query('select * from test_table', (error, results, fields) => {
    if (error) throw error
    res.send(results[0])
  })
})

app.listen(3000, () => {
  console.log('Example app is listening on port 3000!')
})
