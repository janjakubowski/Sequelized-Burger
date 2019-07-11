var express = require("express");
var router = express.Router();
var db = require("../models");

//
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	// burger.all(function(data) {
	// 	var handlebarsObject = {
	// 		burgers: data
	// 	};
	// 	res.render("index", handlebarsObject);
	// });
	// findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(daBurgers) {
		// We have access to the todos as an argument inside of the callback function
		console.log(JSON.stringify(daBurgers));
								var handlebarsObject = {
									burgers: daBurgers
								};
		res.render("index", handlebarsObject );
	  });
});

// 
// POST to add new burger, "devoured" default to "false"
router.post("/api/burgers", function(req, res) {
	// burger.create([
	// 	"burger_name"
	// ], [
	// 	req.body.burger_name
	// ], function(result) {
	// 	res.json({ id: result.insertId });
	// });
	db.Burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured
	  }).then(function(result) {
		// We have access to the new todo as an argument inside of the callback function
		res.json({ id: result.insertId });
	  });

});

// PUT to update "burger" equal to "id" to "true"
router.put("/api/burgers/:id", function(req, res) {
	// var condition = "id = " + req.params.id;
	// burger.update({
	// 	devoured: "true"
	// }, condition, function(result) {
	// 	if (result.changedRows == 0) {
	// 		// If no rows were changed, then the ID must not exist, so 404
	// 		return res.status(404).end();
	// 	} else {
	// 		res.status(200).end();
	// 	}
	// });
});

router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
// 	 if (result.affectedRows == 0) {
// 		return res.status(404).end();
// 	 } else {
// 		res.status(200).end();
// 	 }
//   });
});

// Export routes for server.js to use.
module.exports = router;
