let http = require('http');
const express = require ('express');
const app = express ();
let router = require('./routes');

const server = require ('http').createServer (app);

app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

};

http.createServer(router.handleRequest).listen(8000);