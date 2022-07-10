const catchAsync = require("./../utils/catchAsync");
const Post = require("./../models/postModel");

// get all posts
exports.getPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find();

  res.status(200).json({
    status: "success",
    results: posts.length,
    time: req.requestTime,
    data: { posts },
  });
});

// delete all posts
exports.deletePosts = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {},
  });
});

// get particular post
exports.getPost = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {},
  });
});

// create new post
exports.createPost = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newPost = await Post.create(data);

  res.status(201).json({
    status: "success",
    time: req.requestTime,
    data: {
      newPost,
    },
  });
});

// update previously existing post
exports.updatePost = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {},
  });
});

// delete previously existing post
exports.deletePost = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {},
  });
});
