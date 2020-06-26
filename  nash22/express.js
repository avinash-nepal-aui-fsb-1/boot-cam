var express = require('express');
var app = express();

app.get ('/', function (req, res) {
    res.end('Hello World! from express') ;
})

app.get ('/profile', function (req, res) {
    res.end("this page: will have profile details");

})
app.listen(8080)