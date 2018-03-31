var express           = require('express');
var router            = express.Router();

var mailController    = require('../controllers/mailController');
var config       	 	  = require('../../../../config/config');

module.exports = (app)=> {

/**
 * @api {post} /api/v1/mail Send a mail
 * @apiName Mail - Send
 * @apiGroup Mail
 * @apiDescription Send a mail to user
 * @apiVersion 1.0.0
 *
 * @apiParam {String} to User's email
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "to": "doe@test.com"
 * }
 *
 * @apiSuccessExample {JSON} Response-Example:
 *  {
 *    "data": {
 *      "code": 200
 *      "userMessage": "Friendly Success String",
 *      "serverInfo": "",
 *    }
 *  }
 *
 * @apiError {Object} error error object
 *
 * @apiErrorExample {JSON}  Error-Example
 *  {
 *    "error": {
 *       "code": 401,
 *       "userMessage": "Friendly Error String",
 *       "serverInfo": ""
 *    } 
 *  }
 */  

  router.post('/:whichMail', mailController.sendMail);

  
  console.log('/api/'+ config.apiVersion+'/mails');
  app.use('/api/'+ config.apiVersion+'/mails',router);

}