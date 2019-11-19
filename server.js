const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  var a={
      nam:"hahahaha",
      nu:"hahahaha",
  }
app.get('/ping', function (req, res) {
  res.send('pong');
});

app.get('*', function (req, res) {
    res.sendfile(path.join(__dirname,'build','index.html'))
});

app.listen(process.env.PORT || 8080);