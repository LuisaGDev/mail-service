var config        = require('../../../../config/config');
var nodemailer 	  = require('nodemailer');
var q			  = require('q');
var nunjucks	  = require('nunjucks')

var exports       = module.exports;


var transporter = nodemailer.createTransport({
  service: config.mailService,
  auth: config.mailAuth
})

exports.sendMail = (data, whichMail)=>{

	var defer = q.defer();

	var mailOptions = {
	  from: config.mailAuth.user,
		to: data.to,
		subject: this.getSubject(whichMail),
		html: this.getTemplate(whichMail)
	}

	
	transporter.sendMail(mailOptions, function(err, info){
		if(err)
			defer.reject({userMessage: 'Error to send mail, try later.', serverInfo : mailOptions,  data: err})

		defer.resolve({userMessage: 'Message Sent Successfully!', data: info, serverInfo: mailOptions})
	});

	return defer.promise;

}

exports.getSubject = (whichMail)=>{

	var subjects = {
		'reminder': 'This a reminder'
	}

	return subjects[whichMail];
}

exports.getTemplate = (whichMail)=>{
	var template;
	switch(whichMail){
		case 'reminder':

			template = nunjucks.render(`${__dirname}/../templates/${whichMail}.html`, 
			{})

			break;

		default: 
			break;

	};

	return template;

}


