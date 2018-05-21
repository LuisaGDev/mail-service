var mailService    = require('../services/mailService');

var exports                     = module.exports;

exports.sendMail = (req, res)=>{
	mailService.sendMail(req.body, req.params.whichMail)
	.then((response)=>{
		res.ok(response)
	})
	.catch((err)=>{
		res.badRequest(err);
	}) 
}