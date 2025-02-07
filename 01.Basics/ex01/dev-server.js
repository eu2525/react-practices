const http = require('http');
const path = require('path');
// Express.js는 Node.js를 위한 웹 프레임워크의 하나임.
const express = require('express');

const port = 3000;
const application = express().use(express.static(path.join(__dirname, 'public')))
http
    .createServer(application)
    .on('listening', ()=>{
        console.log(`server starts...on ${port}`);
    })
    .listen(port);
