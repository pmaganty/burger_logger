var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    //res.render("index");
  });


});

router.post("/index", function(req, res) {
  /*cat.insertOne([
    "name", "devour"
  ], [
    req.body.name, req.body.devour
  ], function(result) {
    // Send back the ID of the new quote
    //res.json({ id: result.insertId }); //NEED TO CHANGE
  });*/
});

router.put("/index", function(req, res) {
  /*var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.updateOne({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });*/
});

// Export routes for server.js to use.
module.exports = router;