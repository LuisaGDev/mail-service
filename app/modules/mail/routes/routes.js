var express           = require('express');
var router            = express.Router();

var mailController    = require('../controllers/mailController');
var config       	 	  = require('../../../../config/config');

module.exports = (app)=> {

  router.post('/:whichMail', mailController.sendMail);

  
  console.log('/api/'+ config.apiVersion+'/mails');
  app.use('/api/'+ config.apiVersion+'/mails',router);

}