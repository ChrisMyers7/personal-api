var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.indexName)
app.get('/location', mainCtrl.indexLocation)
app.get('/occupations', mainCtrl.indexOccupations)
app.get('/occupations/latest', mainCtrl.indexOccupationsLatest)
app.get('/hobbies', mainCtrl.indexHobbies)
app.get('/hobbies/:id', mainCtrl.show)
app.get('/skillz', mainCtrl.indexSkillz)
app.get('/secrets/:username/:pin', mainCtrl.indexSecrets)

app.put('/name', mainCtrl.updateName)
app.put('/location', mainCtrl.updateLocation)

app.post('/hobbies', mainCtrl.createHobbies)
app.post('/occupations', mainCtrl.createOccupations)
app.post('/skillz', mainCtrl.createSkillz)

var port = 3000;
app.listen(port, function() {
  console.log('listening to server: ', port);
});
