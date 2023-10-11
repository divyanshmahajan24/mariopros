const express = require ('express');
const app = express ();

const server = require ('http').createServer (app);

app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);

app.get ('/', function (req, res){
    res.render('index.html');    
    });

server.listen (8000);