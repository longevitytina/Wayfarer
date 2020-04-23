const express = require("express");
const router = express.Router();
// const db = require("../models");
const ctrl = require("../controllers");

// CURRENT PATH = 'api/v1/cities'

// GET Cities Index
router.get("/", ctrl.citiesCtrl.index);

// GET Cities Show
router.get("/:id", ctrl.citiesCtrl.show);

// Post Cities Create
router.post("/", ctrl.citiesCtrl.createCity);

// Post CitiesPosts Create
router.post("/:cityId/posts", ctrl.postsCtrl.createPost);

// PUT CitiesPosts Update
router.put("/:cityId/posts/:postId", ctrl.postsCtrl.updatePost);

// DELETE CitiesPosts Destroy
router.delete("/:cityId/posts/:postId", ctrl.postsCtrl.deletePost);

module.exports = router;
