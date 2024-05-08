var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' }); // Definiere den Speicherort für die hochgeladenen Dateien


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Webprog', name: 'Fabian' });
});

/*
router.get('/:year/:month/:day/names', function(req, res, next) {
  var date = req.params.year + '-' + req.params.month + '-' + req.params.day;
  var name2 = req.query.name;
  res.send('Helloooo ' + name2 + '! Received date: ' + date);
});
*/

router.get('/:year/:month/:day', function(req, res, next) {
  var date = req.params.year + '-' + req.params.month + '-' + req.params.day;
  //res.send('Received date: ' + date);
  res.json({year: req.params.year, month: req.params.month, day: req.params.day});
});

/* Get names page
router.get('/names', function(req, res, next) {
  var name2 = req.query.name;
  res.send('Helloooo ' + name2 + '!');
});

 */

router.get('/:year/:month/:day/names', function(req, res, next) {
  var date = req.params.year + '-' + req.params.month + '-' + req.params.day;
  var name2 = req.query.name;
  var surname = req.query.surname;
  res.json({name: name2, surname: surname, year: req.params.year, full_date: date});  
  //res.send('Helloooo ' + name2 + ' ' + surname + '! Received date: ' + date);
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var surname = req.body.surname;
  var year = req.body.year;
  res.json({message: 'Data received', name: name, surname: surname, year: year});
});

router.get('/filedrop', function(req, res, next) {
  res.render('filedrop');
});

router.post('/filedrop', upload.single('file'), function(req, res, next) {
  // req.file enthält Informationen über die hochgeladene Datei
  if (!req.file) {
    return res.status(400).send('Keine Datei hochgeladen');
  }
  res.send('Datei erfolgreich hochgeladen: ' + req.file.filename);
});



module.exports = router;
