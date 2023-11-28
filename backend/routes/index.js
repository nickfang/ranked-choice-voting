var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/votes', function(req, res, next) {
  res.send({votes: [{id: 1, name: 'test', vote: ['test1', 'test2']}]})
})

module.exports = router;
