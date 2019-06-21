const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send("Fudge");
});

//Return all
app.get('/cryptos', function(req, res) {
    db.crypto.findAll().then(function(data) {
        res.json(data);
    });
});

//Return one
app.get('/cryptos/:id', function(req, res) {
    db.crypto.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});


//Create one
app.post('/cryptos', function(req, res) {
    db.crypto.create({
        name: req.body.name,
        lastPrice: parseInt(req.body.price),
        genesisDate: req.body.date,
        issuanceCap: parseInt(req.body.cap),
        rank: parseInt(req.body.rank)
    }).then(function(data) {
        res.json(data);
    });
});

//Update one
app.put('/cryptos/:id', function(req, res) {
    console.log('hitting the put route: ', req.body)
    db.crypto.update({
        name: req.body.name,
        lastPrice: parseInt(req.body.price),
        genesisDate: req.body.date,
        issuanceCap: parseInt(req.body.cap),
        rank: parseInt(req.body.rank)
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});

//Delete one
app.delete('cryptos/:id', function(req, res) {
    db.user.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});
//Make your model
//Run the migrations
//Create one record route
//Read one record route
//Read all records route
//update one record route
//Destroy one record route


app.listen(3000, function () {
    console.log("You're listening to the hot sounds of HOT 💩 3000.  Nothing but 💩s. Nothing but the 💩s. Nothing but the motherfuckin 💩s.")
});