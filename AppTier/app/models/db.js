'user strict';

var mysql = require('mysql');

//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'copadbadmin',
  password: 'copadb2020',
  database: 'copaDataSet'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
