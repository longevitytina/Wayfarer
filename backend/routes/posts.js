const express = require("express");
const router = express.Router();
const db = require("../models");
const ctrl = require("../controllers");

// CURRENT PATH = 'api/v1/user'

// / Post CitiesPosts Create
router.post("/users/:userId/posts", ctrl.postsCtrl.createPost);

// / Get post by user
router.get("/users/:userId/posts", ctrl.postsCtrl.createPost);

// PUT CitiesPosts Update
router.put("/users/:userId/posts/:postId", ctrl.postsCtrl.updatePost);

// DELETE userPosts Destroy
router.delete("/users/:userId/posts/:postId", ctrl.postsCtrl.deletePost);

module.exports = router;
