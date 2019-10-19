'use strict';
module.exports = function(app) {
  var Airports = require('../controller/appController.js');
  
  app.get("/airports",function(req,res){-
        Airports.list_all_Airports(req,res);
  });
  
  //app.route('/airports')
   // .get(Airports.list_all_Airports, );
  //app.route('/distances')
  //  .get(Airports.list_all_distances, );
};
   
   