const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json("Hello World, My name is Sunny Basagare -- :: This app is deployed for proof of concept for recruitment process"
"deploying nodejs project")})

app.listen(3000)
