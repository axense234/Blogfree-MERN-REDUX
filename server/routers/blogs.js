const express = require("express");

const router = express.Router();

const {
  getBlog,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

// Import Middleware
const AuthenticationMiddleware = require("../middleware/authentication");

router
  .get("/blogs/view-blog/:blogId", getBlog)
  .get("/blogs/view-blogs", getAllBlogs)
  .post("/blogs/create-blog", AuthenticationMiddleware, createBlog)
  .patch("/blogs/edit-blog/:blogId", AuthenticationMiddleware, updateBlog)
  .delete("/blogs/delete-blog/:blogId", AuthenticationMiddleware, deleteBlog);

module.exports = router;
