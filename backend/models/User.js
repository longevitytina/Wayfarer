// import mongoose
const mongoose = require("mongoose");

// build schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// model-ify the schema
const User = mongoose.model("User", UserSchema);

// export
module.exports = User;
