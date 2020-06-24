var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

var productRoute = require("./routes/products");
var extraRoute = require("./routes/extras");


var originsWhitelist = ["http://localhost:4200"];

var corsOptions = {
    origin: function(origin, callback) {
      var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
      callback(null, isWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(productRoute);
app.use(extraRoute);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

module.exports = { app };