/* express app */
const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

/* connect to mongodb */
mongoose.connect("mongodb://127.0.0.1:27017/ninjago");
mongoose.Promise = global.Promise;

/* express application */
const app = express();
// listening for request
var server = app.listen(4000, function() {
    console.log("sedang mendengarkan permintaan dari klien");
});

/* socket dot io ninja */
var socket = require("socket.io");
var io = socket(server);

/* ketika terjadi koneksi */
io.on("connection", function (client) {
    console.log(`${client.id} connected`);
    client.on("connection", function (data) {
        console.log(data);
    });
    
    /* feedBack broadCast */
    io.emit("connection", {
        "nama": "server",
        "lokasi": "singapore"
    });

    /* ketika ada pesan dari klien */
    client.on("pesan", function (data) {
        console.log(`pesan dari klien ${client.id}: ${data}`);
        // client.emit("message", "1");

        /* untuk broadCast ke klien(s) */
        io.emit("pesan", `${data}`);
    });
});

/* middleware(s) */
/* var corsOptions = {
    origin: "http://127.0.0.1:4000",
    optionSuccessStatus: 200
} */
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(function (err, req, res) {
    console.log(err);
    // res.status(422).send({error: err.message});
});

// method http get starting point
app.get("/api", function(req, res) {
    res.send({
        name: "Subhan Maulana made for CDC Global Informatika July 2023"
    });
});