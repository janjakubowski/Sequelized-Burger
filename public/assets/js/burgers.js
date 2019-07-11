function addOne (newBurger) {
	// Send the POST request.
	// var newBurger = {
	// 	burger_name: burger_name
	// };
	$.ajax("/api/burgers", {
		type: "POST",
		data: newBurger
	}).then(
		function() { location.reload(); }
	);
}

// function getBurgers() {
// 	burgers = data;
// 	// renderBurgers ();
// }

// function renderBurgers() {

// }


$(function() {

	$(".devour-it").on("click", function(event) {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "PUT"
		}).then(
			function() { location.reload() }
		);

	 });

	$(".duplicate").on("click", function(event) {
		var name = $(this).data("name");
		addOne(name);
	});

	$(".create-form").on("submit", function(event) {
	// Make sure to preventDefault on a submit event.
		event.preventDefault();
		var burger_name = $("#b_name").val().trim();
		var devoured = false;

		var newBurger = {
			burger_name,
			devoured
		};

		addOne(newBurger);

	
	});

	$(".delete-it").on("click", function(event) {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
			function() { location.reload() }
		);
	});

	// var burgers = [];

	// getBurgers();
})