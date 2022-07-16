const catchAsync = require("./../utils/catchAsync");
const Post = require("./../models/postModel");
const cloudinary = require("cloudinary").v2;

const AppError = require("./../utils/AppError");
const { findByIdAndUpdate } = require("./../models/postModel");

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
  const id = req.params.id;

  const post = await Post.findById(id);
  if (!post) {
    return next(new AppError("Post not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      post,
    },
  });
});

// create new post
exports.createPost = catchAsync(async (req, res, next) => {
  const { creator, title, message, tags, selectedFile } = req.body;

  const myUploadedImg = await cloudinary.uploader.upload(selectedFile, {
    folder: "memories",
    quality: "auto",
    fetch_format: "auto",
  });

  const tagsArray = tags.split(",");

  console.log(myUploadedImg);

  const newPost = await Post.create({
    creator,
    title,
    message,
    tags: tagsArray,
    selectedFile: {
      public_id: myUploadedImg.public_id,
      url: myUploadedImg.secure_url,
    },
  });

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
  const id = req.params.id;
  const { creator, title, message, tags, selectedFile } = req.body;

  const post = await Post.findById(id);
  if (!post) {
    return next(new AppError("Post not found", 404));
  }

  let ImgObj;

  if (!selectedFile.url) {
    const myUploadedImg = await cloudinary.uploader.upload(selectedFile, {
      folder: "memories",
      quality: "auto",
      fetch_format: "auto",
    });

    ImgObj = {
      public_id: myUploadedImg.public_id,
      url: myUploadedImg.secure_url,
    };
  } else {
    ImgObj = selectedFile;
  }

  const tagsArray = tags.split(",");
  post = await Post.findByIdAndUpdate(
    id,
    {
      creator,
      title,
      message,
      tags: tagsArray,
      selectedFile: ImgObj,
    },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: { post },
  });
});

// delete previously existing post
exports.deletePost = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const post = await Post.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.increaseLikeCountByOne = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  if (!post) {
    return next(new AppError("Post not found", 404));
  }

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.status(201).json({
    status: "success",
    data: {
      updatedPost,
    },
  });
});
