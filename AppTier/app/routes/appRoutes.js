'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/airports')
    .get(todoList.list_all_Airports);
   
   app.route('/distances')
    .get(todoList.list_all_distances);
    };