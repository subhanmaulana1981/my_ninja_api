const express = require("express");
const app = express();

// importing the router we've just made
const routes = require("./routes/api");

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

// initialize routes and use it with our app
app.use("/api", routes);