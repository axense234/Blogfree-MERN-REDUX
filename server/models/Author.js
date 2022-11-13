const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const AuthorSchema = mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [5, "Please enter a longer username!"],
      maxlength: [20, "Please enter a shorter username"],
      required: true,
    },
    age: {
      type: Number,
      max: [120, "We do not think that you are this old."],
      default: 0,
    },
    imgUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/birthdayreminder/image/upload/v1664019172/Blogfree/115-1150152_default-profile-picture-avatar-png-green_1.png_nuwc0t.png",
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email.",
      ],
      unique: [true, "Please provide an unique email!"],
      required: [true, "Please provide an email."],
    },
    description: {
      type: String,
      maxlength: [400, "Please provide a shorter description"],
      default: "This is your description.",
    },
    selectedCategory: {
      type: String,
      default: "🎮",
    },
    job: {
      type: String,
      default: "None",
      maxlength: [30, "Please provider a shorter job title."],
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minlength: [8, "Please provider a stronger password"],
    },
    blogsCount: {
      type: Number,
      default: 0,
    },
    favorites: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

AuthorSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AuthorSchema.methods.createJWT = function () {
  return jwt.sign(
    { id: this._id, username: this.username },
    process.env.SECRET_JWT_KEY,
    {
      expiresIn: "2d",
    }
  );
};

AuthorSchema.methods.comparePasswords = async function (pass) {
  const isMatch = await bcrypt.compare(pass, this.password);
  return isMatch;
};

module.exports = mongoose.model("Author", AuthorSchema);
