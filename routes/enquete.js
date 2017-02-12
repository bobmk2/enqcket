var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:enqueteId', function(req, res, next) {
  res.render('index', { title: req.params.enqueteId });
});

router.get('/:enqueteId/confirm', function(req, res, next) {
  res.render('index', { title: req.params.enqueteId+" / confirm" });
});

router.get('/:enqueteId/result', function(req, res, next) {
  res.render('index', { title: req.params.enqueteId+" / result" });
});

module.exports = router;
