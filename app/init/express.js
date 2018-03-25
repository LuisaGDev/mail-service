var express      = require('express');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');  
var helmet       = require('helmet');
var config       = require('../../config/config')


module.exports = function initApp() {

  //--------------------setup the express application-------------------------\\
  var app = express();
  
  app        
    .use(helmet())
    .use(cookieParser())            //use cookie - needed for auth
    .use(bodyParser.json())         // to support JSON-encoded bodies
    .use(bodyParser.urlencoded({    // to support URL-encoded bodies
      extended: true
    }))
    .use(express.static('public'))
    

  app.disable('x-powered-by');

  
  //--------------------------initialize custom responses---------------------\\
  require('express-custom-response')(__dirname+ '/responses');

  //-------------------------- load moodules ---------------------------------\\

  require('../modules/mail/routes/routes')(app);

  //-----------------------------start server---------------------------------\\
  config.web.port = process.env.PORT || config.web.port;
  var server = app.listen(config.web.port, function() {
    console.log('Server is running on port: ::' , config.web.port);
    return server;
  });
};
