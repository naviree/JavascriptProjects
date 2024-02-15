const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
	// lodash
	const num = _.random(0, 20);
	console.log(num);

	const greet = _.once(() => {
		console.log("hello");
	});

	greet();

	// set header cotent type
	res.setHeader("Content-Type", "text/html");

	let path = "./views";

	// send an html file
	fs.readFile("./views/index.html", (err, data) => {
		if (err) {
			console.log(err);
		} else {
			// res.write(data);
			res.end(data);
		}
	});
});

server.listen(3000, "localhost", () => {
	console.log("listening for requests on port 3000");
});
