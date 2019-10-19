'user strict';
var sql = require('./db.js');

//Airport object constructor
var Airport = function(Airport){
    this.Airport = Airport.Airport;
    this.status = Airport.status;
    this.created_at = new Date();
};

var Distance = function(Distance){
    this.Distance = Distance.Distance;
    this.status = Distance.status;
    this.created_at = new Date();
};

Airport.getAllAirport = function (result) {
        sql.query("Select * from aeropuertos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Airports : ', res);  

                 result(null, res);
                }
            });   
};

Distance.getAllDistance = function (result) {
        sql.query("Select * from distancias", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Distance : ', res);  

                 result(null, res);
                }
            });   
};
module.exports.Airport = Airport;
module.exports.Distance = Distance;