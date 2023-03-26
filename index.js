const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json("Hello World-- this app is deployed for proof of concept for recruitment process")
})

app.listen(3000)
