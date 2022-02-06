var express = require('express'),
    path = require('path'),
    fleets = require('./routes/fleet');
var app = express();
var fs = require('fs');
var https = require('https');
const cors = require('cors');
``
app.use(cors());


const PUERTO = 5000;

https.createServer({
   
   cert: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/cert.pem'),
   key: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/privkey.pem')
 },app).listen(PUERTO, function(){
	console.log('Servidor https correindo en el puerto 3000');
});

app.get('/:id', fleets.id, function(req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user/:us', fleets.dos, function(req, res, next) {
    console.log('although this matches')
    next()
})


app.get('/user1/:us', fleets.tres, function(req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user2/:us', fleets.cuatro, function(req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user9/:us', fleets.cinco, function(req, res, next) {
    console.log('although this matches')
    next()
})

app.get('blist/:us', fleets.diez, function(req, res, next) {
    console.log('although this matches')
    next()
})
