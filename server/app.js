var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var problem = require('./routes/problem.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/problem', problem);


//any request to a url
app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
    console.log(req.params[0]); //concatonates strings, cross-browser performance
});

//set our port
app.set('port', process.env.PORT || 3000);

//listen
app.listen(app.get('port'), function() {
    console.log("The server is running on port ", app.get('port')); //this is nice to have
});
