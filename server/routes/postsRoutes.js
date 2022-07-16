const express = require("express");
const {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
  deletePosts,
  increaseLikeCountByOne,
} = require("../controllers/postsController");

const router = express.Router();

router.route("/").get(getPosts).post(createPost).delete(deletePosts);

router
  .route("/:id")
  .get(getPost)
  .patch(updatePost)
  .delete(deletePost)
  .put(increaseLikeCountByOne);

module.exports = router;
