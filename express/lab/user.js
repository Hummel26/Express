var express = require("express");
var router = express.Router();

router.get("/", (_req,res) => {
    res.send("User router .....");
});

router.get("/:userId", (req,res) => {
    res.send(req.params);
});

module.exports = router;