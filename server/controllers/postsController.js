const catchAsync = require("./../utils/catchAsync");

// get all posts
exports.getPosts = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {},
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
  res.status(200).json({
    status: "success",
    data: {},
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
