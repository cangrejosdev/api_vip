const express = require('express'),
  router = express.Router();
var app = express();
var cors = require('cors')
app.use(cors());
var allowlist = ['https://www.logistictodo.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
      origin: true
    } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {
      origin: true
    } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

router.get('/list/:id', cors(corsOptionsDelegate), function (req, res) {
  var idx = (req.params.id);
  console.log(idx);
  let sql = "SELECT   kmlbasic.nombre as Nombre, kmlbasic.fecha_hora as Fecha_hora , kmlbasic.latitud as Latitud,  kmlbasic.longitud as Longitud,  kmlbasic.direccion as Direccion,  kmlbasic. kmlbasic.velocidad as Velocidad  FROM kmlbasic WHERE kmlbasic.nombre = " + "'" + idx + "'";
  console.log(sql);
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data);

  })
});

// create new user
router.post('/new', function (req, res) {
  let sql = `INSERT INTO users(name, gender) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.gender
  ];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

module.exports = router;