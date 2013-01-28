var express = require('express'),
  path = require('path');
var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
  res.sendfile('views/index.html');
});

app.get('/test', function(req, res){
  res.sendfile('views/tests.html');
});

app.listen(8080);
