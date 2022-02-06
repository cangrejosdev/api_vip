var express = require('express');
path = require('path');
var app = express();
var fs = require('fs');
var https = require('https');


mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
  host: '199.189.84.125',
  user: 'pluces',
  password: 'Pl8493914',
  database: 'gts',
  connectionLimit: 100,
  waitForConnections: true,
})

const PUERTO = 4040;


https.createServer({

  cert: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/cert.pem', "utf8"),
  key: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/privkey.pem', "utf8"),
  ca: fs.readFileSync('/etc/letsencrypt/live/www.logistictodo.com/chain.pem', "utf8")



}, app).listen(PUERTO, function () {
  console.log('Servidor https Seguro corriendo en el puerto ' + PUERTO);
});

// use the modules

// routers
const usersRouter = require('./routes/users');
// use the modules
//app.use(cors())
//app.use(bodyParser.json());
// use router
app.use('/users', usersRouter);

//app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));