const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninjas");

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
    .then(function () {
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
    // simple way
    Ninja.create(req.body)
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    }).catch(next);
});

// update a ninja in the db
router.put("/ninja/:id", function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function () {
        Ninja.findOne({_id: req.params.id})
        .then(function (ninja) {
            res.send(ninja);
            console.log(ninja);
        })
    })
    .catch(next);
});

// delete a ninja from the db
router.delete("/ninja/:id", function(req, res, next) {
    Ninja.findByIdAndRemove({_id: req.params.id})
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    })
    .catch(next);

});

module.exports = router;