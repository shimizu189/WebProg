var express = require('express');
var router = express.Router();
var fs = require('fs');
let safe = [];

data = fs.readFileSync('posts.json');
if (data.length > 0) {
    safe = JSON.parse(data);
    console.log('Loaded posts from posts.json');
}
else {
    console.log('No posts found in posts.json');
}

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Blog', name: 'Fabian' });
});


router.post('/', function (req, res) {
    let obj = {
        blogID: req.body.blogID,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        author: req.body.author,
        title: req.body.title,
        text: req.body.text
    }

    console.log(safe);
    // Post-Befehle werden hier gespeichert
    safe.push(obj);
    console.log(safe);
    fs.writeFileSync('posts.json', JSON.stringify(safe, null, 2), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    //res.json({message: 'Blog post received', year: year, month: month, day: day, author: author, title: title, text: text});
    res.json({ message: 'Blog post received', obj });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    var post = safe.find(post => post.blogID == id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});


router.put('/:blogID', function (req, res) {
    let blogID = req.params.blogID;
    // Find the post with the given blogID
    let postIndex = safe.findIndex(safe => safe.blogID == blogID);
    console.log("POST"+postIndex);
    if(postIndex > -1){
        safe[postIndex].year = req.body.year;
        safe[postIndex].month = req.body.month;
        safe[postIndex].day = req.body.day;
        safe[postIndex].author = req.body.author;
        safe[postIndex].title = req.body.title;
        safe[postIndex].text = req.body.text;
    
        fs.writeFileSync('posts.json', JSON.stringify(safe, null, 2), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        res.send('Post ' + blogID + ' has been updated!');
    } else {
        res.status(404).send('Post not found');
    }
});


module.exports = router;