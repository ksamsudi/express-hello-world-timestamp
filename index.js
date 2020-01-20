var express = require('express')
var app = express()

app.get('/', function (req, res) {
  ts=Date.now();
  res.send('Timestamp:'+ ts)
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
