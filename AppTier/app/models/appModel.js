'user strict';
var sql = require('./db.js');

//Airport object constructor
var Airport = function(Airport) {
  this.Airport = Airport.Airport;
  this.status = Airport.status;
  this.created_at = new Date();
};

var Distance = function(Distance) {
  this.Distance = Distance.Distance;
  this.status = Distance.status;
  this.created_at = new Date();
};

Airport.getAllAirport = function(result) {
  sql.query('Select * from aeropuertos', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('Airports : ', res);

      result(null, {airports :res});
    }
  });
};

Distance.getAllDistance = function(req, result) {
  var query = 'Select * from distancias';
  if (req.query.from && req.query.to) {
    query =
      query +
      " where ORIG_CD = '" +
      req.query.from +
      "' AND DEST_CD = '" +
      req.query.to +
      "'";
  }
  console.log('query:', query);
  sql.query(query, function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('Distance : ', res);

      result(null, {distance: {distanceList: res}});
    }
  });
};
module.exports.Airport = Airport;
module.exports.Distance = Distance;
