const config = require("./config");
const mongoose = require("mongoose");

mongoose.connect(config.db.connection);

console.log(config.db.connection);
