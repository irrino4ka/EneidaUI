var express = require('express');
var app = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

const bodyParser     = require('body-parser');

app.set('port', process.env.PORT || 4001 );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app/public'));
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});