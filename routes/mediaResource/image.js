var express = require('express');
var router = express.Router();
var fs = require('fs');
var IMAGE_ADDRESS = "./public/images/"

router.get("/", function (req, res, next){
    var address = IMAGE_ADDRESS + req.query.imageName;
    var file = fs.readFileSync(address);
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(file);
})

module.exports = router;
