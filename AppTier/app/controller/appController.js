'use strict';

var Airport = require('../models/appModel.js');

exports.list_all_Airports = function(req, res) {
  Airport.getAllAirport(function(err, Airport) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Airport);
    res.send(Airport);
  });
};


/*
exports.create_a_Airport = function(req, res) {
  var new_Airport = new Airport(req.body);

  //handles null error 
   if(!new_Airport.Airport || !new_Airport.status){

            res.status(400).send({ error:true, message: 'Please provide Airport/status' });

        }
else{
  
  Airport.createAirport(new_Airport, function(err, Airport) {
    
    if (err)
      res.send(err);
    res.json(Airport);
  });
}
};


exports.read_a_Airport = function(req, res) {
  Airport.getAirportById(req.params.AirportId, function(err, Airport) {
    if (err)
      res.send(err);
    res.json(Airport);
  });
};


exports.update_a_Airport = function(req, res) {
  Airport.updateById(req.params.AirportId, new Airport(req.body), function(err, Airport) {
    if (err)
      res.send(err);
    res.json(Airport);
  });
};


exports.delete_a_Airport = function(req, res) {


  Airport.remove( req.params.AirportId, function(err, Airport) {
    if (err)
      res.send(err);
    res.json({ message: 'Airport successfully deleted' });
  });
}
*/