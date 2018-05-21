
var defaultConfig = {
  'web': {
    'host': 'localhost',
    'port': process.env.PORT || 1339
  },
  'apiVersion': 'v1',
  'mailAuth': {
    'user': 'noreply.lagunapp@gmail.com',
    'pass': 'Trudat55!' 
  },
  'mailService': 'gmail',
  'db': {
    'connectionString': 'mongodb://lagunapp:trudat55!@ds147118.mlab.com:47118/lagunapp'
  },
}


module.exports = (function () {
  return defaultConfig;
})();
