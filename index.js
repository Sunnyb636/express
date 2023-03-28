const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json('Hello World - this project is done for demo purpose -Nodejs application deployement on kubernetes cluster ')
})

app.listen(3000)
