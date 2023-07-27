const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Ninja = require("../models/ninjas");
const MongoQS = require("mongo-querystring");
const { query } = require("express");
const { json } = require("body-parser");
const qs = require("qs");

// get a list of ninjas from the db
router.get("/ninjas", function(req, res, next) {
    Ninja.find({})
    .then(function (ninjas) {
        res.send(ninjas);
        console.log(ninjas);
    })
    .catch(next);
});


// get a (one) ninja by id from the db
router.get("/ninja/:id", function(req, res, next) {
    Ninja.findById({_id: req.params.id})
    .then(function (ninja) {
        Ninja.findOne({_id: req.params.id})
        .then(function (ninja) {
            res.send(ninja);
            console.log(ninja);
        })
    }).catch(next);

});

// get a ninja sounds like
router.get("/ninja", function(req, res, next) {
    Ninja.find({name: `${req.query.name}`})
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    }).catch(next);
});

// add a new ninja to the db
router.post("/ninja", function(req, res, next) {
    // a long way
    /* var ninja = new Ninja(req.body);
    ninja.save().then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    }); */
    
    // simple way
    Ninja.create(req.body)
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    }).catch(next);

    /* console.log("permintaan dengan metode POST dari klien");
    console.log(req.body);
    res.send({
        type: "POST",
        name: req.body.name,
        rank: req.body.rank
    }); */
});

// update a ninja in the db
router.put("/ninja/:id", function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function (ninja) {
        Ninja.findOne({_id: req.params.id})
        .then(function (ninja) {
            res.send(ninja);
            console.log(ninja);
        })
    })
    .catch(next);

    /* console.log("permintaan dengan metode PUT dari klien");
    res.send({
        type: "PUT"
    }); */
});

// delete a ninja from the db
router.delete("/ninja/:id", function(req, res, next) {
    /* console.log(req.params.id);
    console.log("permintaan dengan metode DELETE dari klien");
    res.send({
        type: "DELETE"
    }); */

    Ninja.findByIdAndRemove({_id: req.params.id})
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    })
    .catch(next);

});

module.exports = router;