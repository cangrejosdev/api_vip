console.log("Hello world, This is an app to connect to sql server.");
var config = {
        "user": "sa", //default is sa
        "password": "Pl8493914",
        "server": "HPDESARROLLO\HPSERVERCANGREJO", // for local machine
        "database": "compresu_vipadmin", // name of database
        "options": {
            "encrypt": true
        }

      }

sql.connect(config, err => { 
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new sql.Request().query('select 1 as number', (err, result) => {
        //handle err
        console.dir(result)
        // This example uses callbacks strategy for getting results.
    })
        
});

sql.on('error', err => {
    // ... error handler 
    console.log("Sql database connection error " ,err);
})