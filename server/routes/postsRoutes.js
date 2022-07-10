const express = require("express");
const { getPosts } = require("../controllers/postsController");

const router = express.Router();

router.route("/").get(getPosts);


module.exports = router;
