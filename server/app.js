var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

var notifications = app.route('/notifications');

notifications.get(function(req, res) {
  var result = [
    { linkDesc: 'Submit a design for a zip hoodie', img: 'http://placehold.it/91x52'},
    { linkDesc: 'Submit a unique character', img: 'http://placehold.it/91x52'},
    { linkDesc: 'Submit a design for a pullover hoodie', img: 'http://placehold.it/91x52'}
  ];
  
  return res.json(200, { result: result });
});

var designVotes = app.route('/design/:id/votes');