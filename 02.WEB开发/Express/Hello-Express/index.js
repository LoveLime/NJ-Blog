var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send(`Hello world!<h1><a href='/customer'>customer</a></h1>`);
});
app.get('/customer', function(req, res) {
    res.send('customer page');
});
app.get('/admin', function(req, res) {
    res.send('admin page');
});

app.listen(3000);