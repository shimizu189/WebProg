var express = require('express');
var router = express.Router();
var fs = require('fs');
var safe =[];

// Lesen der Datei posts.json beim Serverstart
fs.readFile('posts.json', 'utf8', function(err, data) {
    if (err) throw err;
    var objs = data.split('\n');
    objs.forEach(function(obj) {
        if (obj) {
            safe.push(JSON.parse(obj));
            console.log('Loaded post: ' + obj);
        }
    });
    console.log('Loaded posts from posts.json');
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Blog', name: 'Fabian' });
});
  
router.post('/', function(req, res) {
    let obj ={
        blogID : req.body.blogID,
        year : req.body.year,
        month : req.body.month,
        day : req.body.day,
        author : req.body.author,
        title : req.body.title,
        text : req.body.text
    }
 

    // Post-Befehle werden hier gespeichert
    safe.push(obj);
    fs.appendFile('posts.json', JSON.stringify(obj) + '\n', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

    //res.json({message: 'Blog post received', year: year, month: month, day: day, author: author, title: title, text: text});
    res.json({message: 'Blog post received', obj});
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var post = safe.find(post => post.blogID == id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
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