//中间件是什么？
// 中间件（middleware）就是处理HTTP 请求的函数；最大特点就是一个中间件处理完处理下一个；
// Express的app实例会在运行过程中调用一系列的中间件；
// 每个中间件可以从App实例，接受三个参数，依次为request对象（代表http请求）、
// response对象（代表http回应），next回调函数（代表下一个中间件）。每个中间件
// 都可以对http请求（request对象）进行加工，并且决定是否调用next方法，将request
// 对象再传递给下一个中间件。

const express = require('express');
const http = require('http');

const app = express();

//通过use方法注册一个中间件
app.use((req, res, next) => {
    console.log(`In comes a ${req.method} to ${req.url}`);
    //该中间件只是用来传递request对象
    next();

})

app.use((req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Hello Express!</h1>`);
    //未调用next()方法;request对象不向后传递了
})

http.createServer(app).listen(1337);