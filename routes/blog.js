var express = require('express');
var router = express.Router();
var fs = require('fs');
var safe =[];

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Blog', name: 'Fabian' });
  });
  

router.post('/', function(req, res) {
    let obj ={
        year : req.body.year,
        month : req.body.month,
        day : req.body.day,
        author : req.body.author,
        title : req.body.title,
        text : req.body.text
    }
 

    // Post-Befehle werden hier gespeichert
    safe.push(obj);
    fs.appendFile('posts.json', JSON.stringify(safe) + '\n', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.json({message: 'Blog post received', year: year, month: month, day: day, author: author, title: title, text: text});
});

router.get('/:page', function(req, res) {
    let page = req.params.page;
    res.send('This is page ' + page);
});
router.delete('/:page', function(req, res) {
    let page = req.params.page;
    res.send('Seite ' + page +' wurde gelöscht!');
}); 
router.put('/:page', function(req, res) {
    let page = req.params.page;
    res.send('Seite ' + page +' wurde geändert!');
});

module.exports = router;