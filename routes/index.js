var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//router.param('id', function (req, res, next, id) {
//    res.render('index', {title: 'CALLED ONLY ONCE WITH' + id});
//    res.end;
//})
//
//router.get('/:id', function (req, res, next) {
//    res.render('index', {title: 'Express'});
//    res.end;
//});

module.exports = router;
