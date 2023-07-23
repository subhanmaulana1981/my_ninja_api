const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninjas");

// get a list of ninjas from the db
router.get("/ninjas", function(req, res, next) {
    Ninja.find()
    .then(function (ninjas) {
        res.send(ninjas);
        console.log(ninjas);
    })
    .catch(next);

    /* console.log("permintaan dengan metode GET dari klien");
    res.send({
        type: "GET"
    }); */
}); 

// get a (one) ninja by id from the db
router.get("/ninjas/:id", function(req, res, next) {
    Ninja.findById({_id: req.params.id})
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninja);
    }).catch(next);

}); 


// add a new ninja to the db
router.post("/ninjas", function(req, res, next) {
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
router.put("/ninjas/:id", function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function (ninja) {
        Ninja.findOne({_id: req.params.id})
        .then(function () {
            res.send(ninja);
            console.log(ninjas);
        })
    })
    .catch(next);

    /* console.log("permintaan dengan metode PUT dari klien");
    res.send({
        type: "PUT"
    }); */
});

// delete a ninja from the db
router.delete("/ninjas/:id", function(req, res, next) {
    /* console.log(req.params.id);
    console.log("permintaan dengan metode DELETE dari klien");
    res.send({
        type: "DELETE"
    }); */

    Ninja.findByIdAndRemove({_id: req.params.id})
    .then(function (ninja) {
        res.send(ninja);
        console.log(ninjas);
    })
    .catch(next);

});

module.exports = router;