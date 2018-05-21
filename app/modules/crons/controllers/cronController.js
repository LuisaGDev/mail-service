var Cobuild                     = require('cobuild2');
var _                           = require('lodash');
var cron                        = require('node-cron');

var mailService                 = Cobuild.Utils.Files.requireIfExists('/app/modules/mails/services/mailService');

var exports                     = module.exports;

/**
 *
 * Cron job that runs all days at 1:00 a.m to know if a bill has a day of diferrent and send a reminder.
 * 
 * @return {Sting} String with cron status
 * 
 */

cron.schedule('0 1 * * *', function() {
  return 'Success'
});
