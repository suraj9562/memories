const catchAsync = require("./../utils/catchAsync");

exports.getPosts = catchAsync((req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {},
  });
});
