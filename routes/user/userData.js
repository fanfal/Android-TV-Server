var express = require('express');
var router = express.Router();

/* GET userData listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/hello', function (req, res, next) {
    res.writeHead(200, {'Content': 'text/json'});
    res.end(JSON.stringify(require('../../json/offers.json')));
});


module.exports = router;
