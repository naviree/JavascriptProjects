const express = require("express");
const app = express();

// Pass the uri to the connect function
app.get("/", (req, res) => {
	res.send("Hello, this is your Express server!");
});

app.listen(8001, () => {
	console.log("Server started on port 8001");
});
