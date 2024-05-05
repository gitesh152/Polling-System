//Mongoose Configuration
const mongoose = require("mongoose");
mongoose.connect(
  process.env.db
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting database ..."));

db.once("open", () => console.log(`Successfully connected to ${db.name}`));

module.exports = db;
