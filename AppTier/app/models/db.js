'user strict';

var mysql = require('mysql');

//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = mysql.createConnection({
  host: 'datasetcopa.c9koanxhmgic.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'passw0rd',
  database: 'copaDataSet'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
