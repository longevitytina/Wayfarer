const db = require("../models");

const showPost = (req, res) => {
  db.City.findById(req.params.cityId, (err, foundCity) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" });
    }

    // Find Post By ID
    const foundPost = foundCity.posts.id(req.params.postId);

    // Verify Post Found
    if (!foundPost) {
      return res
        .status(400)
        .json({ status: 400, error: "Could not find post" });
    }

    res.json(foundPost);
  });
};

const createPost = (req, res) => {
  // Create Post
  db.Post.create(req.body, (err, newPost) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" });
    }

    // Find City To Associate The Post With
    db.City.findById(req.params.cityId, (err, foundCity) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again",
        });
      }

      // Add Post To City
      foundCity.posts.push(newPost);

      // Save Modified City
      foundCity.save((err, savedCity) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, please try again",
          });
        }

        res.json(newPost);
      });
    });
  });
};

const updatePost = (req, res) => {
  // Find City By ID
  db.City.findById(req.params.cityId, (err, foundCity) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" });
    }

    // Find Post By ID
    const postToUpdate = foundCity.posts.id(req.params.postId);

    // Verify Post Found
    if (!postToUpdate) {
      return res
        .status(400)
        .json({ status: 400, error: "Could not find post" });
    }

    // Update Post In City Record
    postToUpdate.title = req.body.title;
    postToUpdate.content = req.body.content;

    // Save Modified City
    foundCity.save((err, savedCity) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again",
        });
      }

      // Update Post in Post Collection
      db.Post.findByIdAndUpdate(
        req.params.postId,
        req.body,
        { new: true },
        (err, updatedPost) => {
          if (err) {
            return res.status(400).json({
              status: 400,
              error: "Something went wrong, please try again",
            });
          }

          res.json(updatedPost);
        }
      );
    });
  });
};

const deletePost = (req, res) => {
  // Find City By ID
  db.City.findById(req.params.cityId, (err, foundCity) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" });
    }

    // Find Post By ID
    const postToDelete = foundCity.posts.id(req.params.postId);

    if (!postToDelete) {
      return res
        .status(400)
        .json({ status: 400, error: "Could not find post" });
    }

    // Delete Post From City Record
    postToDelete.remove();

    // Save Modified City
    foundCity.save((err, savedCity) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again",
        });
      }

      // Delete Post From Post Collection
      db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, please try again",
          });
        }

        res.json(deletedPost);
      });
    });
  });
};

module.exports = {
  showPost,
  createPost,
  updatePost,
  deletePost,
  post,
};
