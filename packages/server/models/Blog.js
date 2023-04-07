const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minlength: [3, "Please provide a longer title."],
      maxlength: [40, "Please provide a shorter title."],
      required: true,
    },
    category: {
      type: String,
      default: "anythingelse",
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "Author",
      required: [true, "Please provide an author."],
    },
    description: {
      type: String,
      minlength: [50, "Please provider a longer description."],
      maxlength: [1000, "Please provider a shorter description."],
      required: true,
    },
    reactions: {
      type: Object,
      default: {
        smart: 0,
        lmao: 0,
        love: 0,
        nerd: 0,
        crying: 0,
        scary: 0,
        puke: 0,
        poop: 0,
        thumbsUp: 0,
        nice: 0,
        thumbsDown: 0,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
