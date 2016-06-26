var express = require('express');
var router = express.Router();
var fs = require("fs");
var movie_mp4;
var address = "/Users/hxxu/Downloads/Server/public/media/media.mp4";
fs.readFile(address, function (err, data) {
    if (err) {
        throw err;
    }
    movie_mp4 = data;
});

router.get("/", function (req, res, next) {
    var total = movie_mp4.length;
    if (req.headers['range']){
        var range = req.headers.range;
        var parts = range.replace(/bytes=/, "").split("-");
        var partialstart = parts[0];
        var partialend = parts[1];

        var start = parseInt(partialstart, 10);
        var end = partialend ? parseInt(partialend, 10) : total-1;
        var chunksize = (end-start)+1;
        console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

        var file = fs.createReadStream(address, {start: start, end: end});
        res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
        file.pipe(res);
    } else {
        console.log('ALL: ' + total);
        res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
        fs.createReadStream(address).pipe(res);
    }
})

module.exports = router;