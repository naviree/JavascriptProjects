const sqlite3 = require("sqlite3").verbose();
let sql;

// connect to DB
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
	if (err) return console.error(err.message);
});
// Create table
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)`;
// db.run(sql);

// Drop table
// db.run("DROP TABLE users");

//Insert data into table

// sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`;
// db.run(
// 	sql,
// 	["jeremy", "jun", "jeremy_use", "test", "jeremy@gma.com"],
// 	(err) => {
// 		if (err) return console.error(err.message);
// 	}
// );

// update data
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ["Jake", 1], (err) => {
// 	if (err) return console.error(err.message);
// });

// delete data
sql = `DELETE FROM users WHERE id=?`;
db.run(sql, [1], (err) => {
	if (err) return console.error(err.message);
});

// query the database
sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
	if (err) return console.error(err.message);
	rows.forEach((row) => {
		console.log(row);
	});
});