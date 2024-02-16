const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
	"mongodb+srv://jelly:1234@jun.6xgkvde.mongodb.net/test?retryWrites=true&w=majority";

async function connect(uri) {
	try {
		await mongoose.connect(uri); // Fix the typo here (use uri instead of url)
		console.log("connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
}

connect(uri); // Pass the uri to the connect function

app.listen(8001, () => {
	console.log("Server started on port 8001");
});
