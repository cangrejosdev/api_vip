let sql;

sql = new (require('rest-mssql-nodejs'))({
    user: "sa",
    password: "Pl%8493914",
    server: "104.244.168.6",
    database: "ANB-GPSDB"

});




exports.noventaynueve = function (req, res) {

    var para    = (req.params.pa);
    
    setTimeout(async () => {
        console.log(para);
        const resultado = await sql.executeStoredProcedure('ultimo_reporte' , null , {u:  para });
        console.log(resultado.data);
        res.send(resultado.data);
    },1);
    
};