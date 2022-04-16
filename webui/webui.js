var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

var server = app.listen(80, function () {
    console.log('WEBUI running on port 80');
});
