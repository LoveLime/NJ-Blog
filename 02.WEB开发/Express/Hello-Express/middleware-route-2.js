//改装下middleware-route-1

const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();

fs.readFile('../../../test.html', (err, data) => {
    file = data.toString();
});
app.use('/home', (req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1 style="color:red">Home Page</h1>`);
});

app.use('/about', (req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>About Page</h1>`);
});

app.use('/test', (req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
})

app.use((req, res, next) => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`<h1>404 Page</h1>`);
})

http.createServer(app).listen(1337);