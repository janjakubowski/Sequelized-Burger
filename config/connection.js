// Set up MySQL connection.
var mysql = require("mysql");

var db;

if (process.env.JAWSDB_URL) {
	db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	db = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "burgerking",
		password: "gB;6M^e?Df*_c63]",
		database: "yummy_db"
	});
};

// Make connection.
db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

// Export connection for our ORM to use.
module.exports = db;
