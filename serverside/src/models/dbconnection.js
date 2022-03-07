var mysql = require('mysql');
const config = require('../config/config')

var connection = mysql.createConnection(config.db);
 
connection.connect((err)=>{
  if(!err){
    console.log("Connction Done")
  }
  else{
    console.log("Connction Not Done")
  }
});
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
      if (err.fatal) {
        console.trace('fatal error: ' + err.message);
      }
      return del.call(this, err, sequence);
};
module.exports = connection;