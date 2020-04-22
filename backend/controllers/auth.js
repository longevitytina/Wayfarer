const db = require("../models");
const bcrypt = require("bcrypt");

// POST - create new user (register)
const register = (req, res) => {
  // validation of the POSTed data (make sure the user has a name, email, and pw)
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.city
  ) {
    return res.status(400).json({
      status: 400,
      message: "Please enter a name, city, email, and password",
    });
  }

  // make sure user does not already exist
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    // error checking for a problem with the server or DB
    if (err)
      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again.",
      });

    // if a user is found, return a response
    if (foundUser)
      return res.status(400).json({
        status: 400,
        message: "A user with that email address already exists!",
      });

    // Generate a safe password
    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res.status(500).json({
          status: 500,
          message: "Something went wrong. Please try again.",
        });

      // Hash the user's password using the salt that was generated
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err)
          return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again.",
          });

        const newUser = {
          name: req.body.name,
          email: req.body.email,
          city: req.body.city,
          password: hash,
        };

        db.User.create(newUser, (err, savedUser) => {
          if (err) return res.status(500).json({ status: 500, message: err });
          return res
            .status(200)
            .json({ status: 200, message: `${savedUser.name} registered!` });
        });
      });
    });
  });
};

module.exports = {
  register,
  //   login,
  //   verify,
  //   logout,
};
