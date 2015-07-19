'use strict';

var express     = require('express');
var Twitter     = require('twitter');
var bodyParser  = require('body-parser');
var swig        = require('swig');
var app         = express();
var PORT        = process.env.PORT || 5050;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Set Swig as view engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/dist/views');

// Set the static files root
app.use(express.static(__dirname + '/dist'));

// Setup Twitter client
var client = new Twitter({
    consumer_key: 'RSO1KPnjOU3PMpR98xfQaSIgu',
    consumer_secret: 'S8A6PhZ86xw0MQUOoLveBUr0JQHeas8Kti55QYg31csVS5UqmM',
    access_token_key: '249775666-PEpnP6Vx9IxgzLpj6akXexdzQ8DcvEqfMOw5pBqk',
    access_token_secret: 'uVG2dDPl9osO16tA6MypRSluwmJvjNxC4Mxr2x7LQkArq'
});

// GET: /
app.get('/', function(req, res){
    res.render('layout',{});
});

// POST: /
app.post('/', function(req, res) {
    // Twitter API GET results
    client.get('search/tweets',{q: req.body.userSearch}, function(error, tweets, response){
        if(error) throw error;
        res.json(tweets);
    });
});

var server = app.listen(PORT, function(){
    var host = server.address().address;

    console.log('Server running at http://%s:%s', host, PORT);
});
