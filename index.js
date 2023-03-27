const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json("Hello World -- :: This app is deployed for proof of concept for recruitment process")
"this project is created for demo purpose"})

app.listen(3000)
