const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
var port = 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host: 'localhost',
  user: 'copadbadmin',
  password: 'copadb2020',
  database: 'copaDataSet'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
