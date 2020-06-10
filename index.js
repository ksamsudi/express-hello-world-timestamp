var express = require('express')
var app = express()
var format = require('date-format');

app.get('/', function (req, res) {
  ts=Date.now();
  res.json({ "Timestamp":+ ts , "Time":format('hh:mm:ss', new Date()) })
})

app.listen(8080, function () {
  console.log('Listening on port 8080...')
})
