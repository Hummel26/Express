var express = require("express");
var app = express();

var user = require("./user");
app.use("/user" ,user);

app.listen(3000, () => {
    console.log("Server Running on port 3000!");
});