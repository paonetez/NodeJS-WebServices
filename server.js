var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());

var routes = require('./routes/routing');
app.use('/',routes); 


app.listen(9000,'127.0.0.1',function(){
    console.log('Server running @ 9000!');
});