var sql = require("mssql");

var config = {
    "server": "104.238.110.124\\empresascasanova",
    "user": "sa",
    "password": "Pl8493914",
    "database": "compresu_vipadmin",
    "connectionTimeout": 300000,
    "idleTimeoutMillis": 300000,
    "requestTimeout": 300000,
    "stream": true,
};
// var sql = require("mssql");

// var config = {
//     "server": "104.244.168.6\\RYMGEOLOCAL",
//     "user": "sa",
//     "password": "Pl%8493914",
//     "database": "ANB-GPSDB",
//     "connectionTimeout": 300000,
//     "idleTimeoutMillis": 300000,
//     "requestTimeout": 300000,
//     "stream": true,
// };


//var config = {
//"server": "HPDESARROLLO\\HPDESARROLLO2019",
// "user": "sa",
//"password": "Pl8493914",
// "database": "compresu_vipadmin",
// "connectionTimeout": 300000,
//"idleTimeoutMillis": 300000,
// "requestTimeout": 300000,
//  "stream":true
//};

exports.all = function (req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from dba_vendedor ', function (err, recordset) {
            if (err) console.log(err)

            res.send(columns);

        });

    });

    alert()

};

//Endpoint : Consulta de Datos del operador Para Pago en Plataforma Punto Pago
//Envia Numero de Cedula
exports.id = function (req, res) {
    let id = (req.params.id);
    console.log(id);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('cosnulta_operador_api ' + "'" + id + "'", function (err, result) {

            if (err) console.log("Error")
            res.send(result.recordset);


        });

    });

};

//Endpoint: Consulta de Top diez Peores Pagadores
//Se le envia el nombre del cobrador 
exports.dos = function (req, res) {
    var user = (req.params.us);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('json_peores_pagadores' + "'" + user + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

//Endpoint: Consulta Expectativa ppr Cobrador 
//Se le envia el nombre del cobrador 
exports.tres = function (req, res) {
    var user = (req.params.us);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('jsonexpectativapty' + "'" + user + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};


//Endpoint: Consulta Expectativa ppr Cobrador 
//Se le envia el nombre del cobrador 
exports.cuatro = function (req, res) {
    var user = (req.params.us);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('jsonexpectativaptyheader' + "'" + user + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

//Endpoint: Consulta Resumen Parados 
//Se le envia la inicial de la Unidad de negocio (C.P.V)
exports.cinco = function (req, res) {
    var ug = (req.params.us);
    console.log(ug);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('dbo_ver_paraadosxcierre_gapp' + "'" + ug + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

//Endpoint: Consulta Lista negra de Operadores  
//Se le envia el nombre del cobrador 
exports.diez = function (req, res) {
    var user = (req.params.us);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('pxsecret ' + user, function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

exports.siete = function (req, res) {
    var user = (req.params.us);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_expecativa_light_I ' + user, function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

exports.ocho = function (req, res) {
    var pana = (req.params.np);
    var monto = (req.params.mo);
    console.log(pana);
    console.log(monto);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('insertar_panapass ' + pana + ", " + monto, function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });


    clearImmediate
};


exports.diez = function (req, res) {
    var op = (req.params.op);
    console.log('Jsonexpectativapty_op ' + op);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Jsonexpectativapty_op ' + op, function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
};


exports.once = function (req, res) {
    var em = (req.params.em);
    var ps = (req.params.ps);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('login_app ' + "'" + em + "'," + "'" + ps + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
};

exports.doce = function (req, res) {
    var em = (req.params.em);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log("Error:", err);
        var request = new sql.Request();
        request.query('Json_ranking_acumulado', function (err, result) {
            if (err) console.log(err)
            console.log("resultado", result);
            res.send(result.recordset);
        });

    });
};

exports.trece = function (req, res) {
    var user = (req.params.us);
    var tipo = (req.params.ti);
    var nivel = (req.params.ni);
    var suc = (req.params.su);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('json_peores_pagadores_niveles' + "'" + user + "','" + tipo + "','" + nivel + "','" + suc + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};


exports.catorce = function (req, res) {
    var user = (req.params.us);
    var tipo = (req.params.ti);
    var nivel = (req.params.ni);
    var suc = (req.params.su);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_expecativa_light_IEX' + "'" + user + "','" + tipo + "','" + nivel + "','" + suc + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

exports.quince = function (req, res) {
    var user = (req.params.us);
    var tipo = (req.params.ti);
    var nivel = (req.params.ni);
    var suc = (req.params.su);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('jsonexpectativaptyheader_ext' + "'" + user + "','" + tipo + "','" + nivel + "','" + suc + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

exports.dieciseis = function (req, res) {
    var user = (req.params.us);
    var tipo = (req.params.ti);
    var nivel = (req.params.ni);
    var suc = (req.params.su);
    console.log(user);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('json_enviar_paradosx' + "'" + user + "','" + tipo + "','" + nivel + "','" + suc + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};


exports.diecisiete = function (req, res) {
    var para = (req.params.pa);


    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('json_nunidad_placa' + "'" + para + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

exports.dieciocho = function (req, res) {
    var para = (req.params.pa);


    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('datos_futuro_operador' + "'" + para + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};


exports.diecinueve = function (req, res) {
    var para = (req.params.pa);


    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_movimientos_general_pty' + "'" + para + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);

        });

    });



};

exports.veinte = function (req, res) {

    var para = (req.params.pa);

    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log("Error:", err);
        var request = new sql.Request();
        request.query('Json_dashboard' + "'" + para + "'", function (err, result) {
            if (err) console.log(err)
            console.log('Resultado:', result);
            res.send(result.recordset);

        });

    });



};

exports.veintiuno = function (req, res) {
    var op = (req.params.pa);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_mov_diario_X_operador_user ' + "'" + op + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
};

exports.veintidos = function (req, res) {

    var para = (req.params.pa);

    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log("Error:", err);
        var request = new sql.Request();
        request.query('Json_cierre_hecho' + "'" + para + "'", function (err, result) {
            if (err) console.log(err)
            console.log('Resultado:', result);
            res.send(result.recordset);

        });

    });

};

exports.veintitres = function (req, res) {
    var op = (req.params.pa);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('ver_detalle_op_taller ' + "'" + op + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}

exports.veinticinco = function (req, res) {
    var op = (req.params.pa);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_Datos_op_pasarela_pago ' + "'" + op + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}

exports.veintiseis = function (req, res) {
    var op = (req.params.pa);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_noticias_yappy ', function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}

exports.veintisiete = function (req, res) {
    var unidad = (req.params.pa);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('Json_estadistica_cambio_aceite' + "'" + unidad + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}


exports.veintiocho = function (req, res) {
    var orderid = (req.params.oid);
    var noper = (req.params.op);
    var monto = (req.params.mo);
    var confirmacion = (req.params.co);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('yappy_backend_order_enviada' + "'" + orderid.trim() + "','" + noper + "','" + monto + "','" + confirmacion + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}

exports.veintinueve = function (req, res) {
    var orderid = (req.params.oid);
    var status = (req.params.st);
    var hash = (req.params.hs);
    var domain = (req.params.do);
    var confirmacion = (req.params.co);
    var fecha = (req.params.fe);
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('yappy_backend_order_recibida' + "'" + orderid.trim() + "','" + status + "','" + hash + "','" + domain + "','" + confirmacion + "','" + fecha + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    }); ``
}


exports.treinta = function (req, res) {
    var op  = (req.params.op);
    var lat = (req.params.lat);
    var lon = (req.params.lon);
   
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('yappy_inserta_location' + "'" + op + "','" + lat + "','" + lon + "'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}


exports.pagosbg = function (req, res) {
    var st  = req.query.status;
    var cn  = req.query.confirmationNumber;
    var ha  = req.query.hash;
    var dom = req.query.domain;     
    var or  = req.query.orderId;
   
    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('yappy_backend_order_recibida' + "'" + or + "','" + st + "','" + ha+ "','" + dom +"','" + cn +"'", function (err, result) {
            if (err) console.log(err)
            console.log(result);
            res.send(result.recordset);
        });

    });
}




exports.noventaynueve = function (req, res) {

    var para = (req.params.pa);

    sql.close();
    sql.connect(config, function (err) {
        if (err) console.log("Error:", err);
        var request = new sql.Request();
        request.query('ultimo_reporte' + "'" + para + "'", function (err, result) {
            if (err) console.log(err)
            console.log('Resultado:', result);
            res.send(result.recordset);

        });

    });

};