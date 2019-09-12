var express = require("express");
var app = express();

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.get("/users/:userId", (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log("Server Running on port 3000!");
});