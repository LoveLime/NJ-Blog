const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

let file = "";
fs.readFile('../../../test.html', (err, data) => {
    file = data.toString();
});
//当路径匹配的时候返回res.end里面的数据
app.use((req, res, next) => {
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1 style="color:red">Home Page</h1>`);

    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.url == '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>About Page</h1>`);
    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.url == '/test') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
    } else {
        next();
    }
})

app.use((req, res, next) => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`<h1>404 Page</h1>`);
})

http.createServer(app).listen(1337);