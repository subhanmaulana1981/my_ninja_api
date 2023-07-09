const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// body-parser middleware
app.use(bodyParser.json());

// importing the router we've just made
const routes = require("./routes/api");
// initialize routes and use it with our app
app.use("/api", routes);

// listening for request
app.listen(process.env.port || 4000, function() {
    console.log("sedang mendengarkan permintaan dari klien");
});

// method http get
/* app.get("/api", function(req, res) {
    console.log("Ini adalah permintaan dengan metode GET dari klien");
    res.send({
        name: "Subhan"
    });
    // res.end();
}); */