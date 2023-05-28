const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/angular", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  description: String,
  imgUrl: [String],
  type: String,
});

module.exports = mongoose.model("Product", productSchema);
