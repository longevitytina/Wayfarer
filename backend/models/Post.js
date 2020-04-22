const mongoose = require("mongoose");

// City Schema
const CitySchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  posts: [Post.schema],
});

const City = mongoose.model("City", CitySchema);

module.exports = City;
