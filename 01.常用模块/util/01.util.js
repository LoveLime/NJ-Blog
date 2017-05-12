// util 是一个Node.js 核心模块，提供常用函数的集合，
//用于弥补核心JavaScript 的功能 过于精简的不足。

const util = require('util');

console.log(util.isArray([])); //true

console.log(util.isArray('')); //false