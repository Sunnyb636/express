const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json('Hello World -- this project is done for demo purpose')
})

app.listen(3000)
