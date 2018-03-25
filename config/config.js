var defaultConfig = {
	'web': {
    'host': 'localhost',
    'port': 1339
  },
  'apiVersion': 'v1',
  'mailAuth': {
    'user': 'noreply.lagunapp@gmail.com',
    'pass': 'Trudat55!' 
  },
  'mailService': 'gmail'
}


module.exports = (function () {
  return defaultConfig;
})();