const config = require("./config");
const mongoose = require("mongoose");

mongoose.connect(config.db.connection);

console.log(config.db.connection);
console.log("Connected to MongoDB");

//

const carSchema = new mongoose.Schema({
	make: String,
	model: String,
	year: Number,
	color: String,
	mileage: Number,
	needsRepair: Boolean,
});

const Car = mongoose.model("Car", carSchema);

const myCar = new Car({
	make: "Toyota",
	model: "Corolla",
	year: 2007,
	color: "grey",
	mileage: 110000,
	needsRepair: false,
});

myCar
	.save()
	.then((car) => {
		console.log(car);
	})
	.catch((err) => {
		console.error(err);
	});
