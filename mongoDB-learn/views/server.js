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

// Car.create(myCar, (err, car) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(car);
// });

// Car.create(myCar)
//   .then((err, car) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(car);
//   })
//   .then(console.log(Car));

Car.findById("65d530e9839d0da6c6edbdbb")
  .exec() // execute the query and return a promise
  .then((foundCar) => {
    console.log(foundCar);
  })
  .catch((err) => {
    console.log("err" + err);
  });
