const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");

/* our api-app */
const app = express();

/* middleware(s) */
app.use(bodyParser.json());
app.use("/api", routes);

// listening for request
app.listen(process.env.port || 4000, function() {
    console.log("sedang mendengarkan permintaan dari klien");
});

// method http get starting point
/* app.get("/api", function(req, res) {
    console.log("Ini adalah permintaan dengan metode GET dari klien");
    res.send({
        name: "Subhan"
    });
    // res.end();
}); */