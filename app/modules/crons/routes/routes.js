var Cobuild           = require('cobuild2');
var express           = require('express');
var router            = express.Router();
var cronController   = require(Cobuild.Utils.Files.dirpath(__dirname)+'/controllers/cronController');


module.exports = function(app, limiter) {
  
  console.log('/api/'+Cobuild.config.apiVersion+'/crons');
  app.use('/api/'+Cobuild.config.apiVersion+'/crons',router);


}