var express = require('express');
path = require('path');
fleets = require('./routes/fleet');
var app = express();
var fs = require('fs');
var https = require('https');

``

var cors = require('cors')

app.use(cors())

const PUERTO = 5001;

https.createServer({

     cert: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/cert.pem', "utf8"),
     key: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/privkey.pem', "utf8"),
     ca: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/chain.pem', "utf8")



}, app).listen(PUERTO, function () {
    console.log('Servidor https Seguro corriendo en el puerto: ' + PUERTO);
});

var allowlist = ['https://www.logistictodo.com']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {
            origin: true
        } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = {
            origin: false
        } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}


app.get('/user99/:pa', cors(corsOptionsDelegate), fleets.noventaynueve, function (req, res, next) {
    console.log('although this matches')
    next()
})
//Finn 