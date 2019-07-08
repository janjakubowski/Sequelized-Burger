function addOne (burger_name) {
	// Send the POST request.
	var newBurger = {
		burger_name: burger_name
	};
	$.ajax("/api/burgers", {
		type: "POST",
		data: newBurger
	}).then(
		function() { location.reload(); }
	);
}


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

	var newBurger = $("#b_name").val().trim();

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
})