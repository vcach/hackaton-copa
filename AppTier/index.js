const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
var port = 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host: 'datasetcopa.c9koanxhmgic.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'passw0rd',
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
