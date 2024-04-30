var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Blog', name: 'Fabian' });
  });
  

router.post('/', function(req, res) {
    var year = req.body.year;
    var month = req.body.month;
    var day = req.body.day;
    var author = req.body.author;
    var title = req.body.title;
    var text = req.body.text;

    var safe = [year, month, day, author, title, text];

    res.json({message: 'Blog post received', year: year, month: month, day: day, author: author, title: title, text: text});
});

router.get('/:page', function(req, res) {
    var page = req.params.page;
    res.send('This is page ' + page);
});

module.exports = router;