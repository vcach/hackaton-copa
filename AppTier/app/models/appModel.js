'user strict';
var sql = require('./db.js');

//Airport object constructor
var Airport = function(Airport){
    this.Airport = Airport.Airport;
    this.status = Airport.status;
    this.created_at = new Date();
};
/* Airport.createAirport = function (newAirport, result) {    
        sql.query("INSERT INTO Airports set ?", newAirport, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Airport.getAirportById = function (AirportId, result) {
        sql.query("Select Airport from Airports where id = ? ", AirportId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
*/
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
/*Airport.updateById = function(id, Airport, result){
  sql.query("UPDATE Airports SET Airport = ? WHERE id = ?", [Airport.Airport, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Airport.remove = function(id, result){
     sql.query("DELETE FROM Airports WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};
*/
module.exports= Airport;