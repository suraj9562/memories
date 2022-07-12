const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Post", postSchema);
