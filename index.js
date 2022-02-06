var express = require('express');
path = require('path');
fleets = require('./routes/fleet');
var app = express();
var fs = require('fs');
var https = require('https');

``
//Midelware
var cors = require('cors')

app.use(cors())

const PUERTO = 5000;


https.createServer({

    cert: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/cert.pem', "utf8"),
    key: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/privkey.pem', "utf8"),
    ca: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/chain.pem', "utf8")


}, app).listen(PUERTO, function () {
    console.log('Servidor https Seguro corriendo en el puerto 5000 Esperando peticiones');
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
    } callback(null, corsOptions) // callback expects two parameters: error and options
}
//Rutas 
app.get('/:id', cors(corsOptionsDelegate), fleets.id, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user/:us', cors(corsOptionsDelegate), fleets.dos, function (req, res, next) {
    console.log('although this matches')
    next()
})


app.get('/user1/:us', cors(corsOptionsDelegate), fleets.tres, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user2/:us', cors(corsOptionsDelegate), fleets.cuatro, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user9/:us', cors(corsOptionsDelegate), fleets.cinco, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('blist/:us', cors(corsOptionsDelegate), fleets.diez, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user7/:us', cors(corsOptionsDelegate), fleets.siete, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user8/:np/:mo', cors(corsOptionsDelegate), fleets.ocho, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user10/:op', cors(corsOptionsDelegate), fleets.diez, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user11/:em/:ps', cors(corsOptionsDelegate), fleets.once, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user12/:em', cors(corsOptionsDelegate), fleets.doce, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user13/:us/:ti/:ni/:su', cors(corsOptionsDelegate), fleets.trece, function (req, res, next) {
    console.log('although this matches')
    next()
})
app.get('/user14/:us/:ti/:ni/:su', cors(corsOptionsDelegate), fleets.catorce, function (req, res, next) {
    console.log('although this matches')
    next()
})
app.get('/user15/:us/:ti/:ni/:su', cors(corsOptionsDelegate), fleets.quince, function (req, res, next) {
    console.log('although this matches')
    next()
})
app.get('/user16/:us/:ti/:ni/:su', cors(corsOptionsDelegate), fleets.dieciseis, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user17/:pa', cors(corsOptionsDelegate), fleets.diecisiete, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user18/:pa', cors(corsOptionsDelegate), fleets.dieciocho, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user19/:pa', cors(corsOptionsDelegate), fleets.diecinueve, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user20/:pa', cors(corsOptionsDelegate), fleets.veinte, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user21/:pa', cors(corsOptionsDelegate), fleets.veintiuno, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user22/:pa', cors(corsOptionsDelegate), fleets.veintidos, function (req, res, next) {
    console.log('although this matches')
    next()
})
app.get('/user23/:pa', cors(corsOptionsDelegate), fleets.veintitres, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user25/:pa', cors(corsOptionsDelegate), fleets.veinticinco, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user26/:pa', cors(corsOptionsDelegate), fleets.veintiseis, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user27/:pa', cors(corsOptionsDelegate), fleets.veintisiete, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user28/:oid/:op/:mo/:co', cors(corsOptionsDelegate), fleets.veintiocho, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user29/:oid/:st/:hs/:do/:co/:fe', cors(corsOptionsDelegate), fleets.veintinueve, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user30/:op/:lat/:lon', cors(corsOptionsDelegate), fleets.treinta, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/user99/:pa', cors(corsOptionsDelegate), fleets.noventaynueve, function (req, res, next) {
    console.log('although this matches')
    next()
})

app.get('/api/pagosbg', cors(corsOptionsDelegate), fleets.pagosbg, function (req, res, next) {
    console.log('although this matches')
    next()
});


// Pablo Luces
