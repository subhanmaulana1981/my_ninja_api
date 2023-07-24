const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

/* our api-app */
const app = express();

/* connect to mongodb */
mongoose.connect("mongodb://127.0.0.1:27017/ninjago");
mongoose.Promise = global.Promise;

/* middleware(s) */
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({error: err.message});
});

// listening for request
app.listen(process.env.port || 4000, function() {
    console.log("sedang mendengarkan permintaan dari klien");
});

// method http get starting point
app.get("/api", function(req, res) {
    res.send({
        name: "Subhan"
    });
    console.log("Ini adalah permintaan dengan metode GET dari klien");

    // res.end();
});