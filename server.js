var express     = require('express');
var Twitter     = require('twitter');
var bodyParser  = require('body-parser');
var fs          = require('fs');
var app         = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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
    fs.readFile(__dirname + '/index.html', 'utf-8', function(err, text){
        res.send(text);
    });
});

// POST: /
app.post('/', function(req, res) {
    // Twitter API GET results
    client.get('search/tweets',{q: req.body.userSearch}, function(error, tweets, response){
        if(error) throw error;
        res.json(tweets);
    });
});

var server = app.listen(3030, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
});
