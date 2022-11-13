const express = require("express");
const router = express.Router();

const {
  getAuthor,
  getAllAuthors,
  updateAuthor,
  createAuthor,
  deleteAuthor,
  loginAuthor,
  getProfile,
} = require("../controllers/authors");

// Import Middleware
const AuthenticationMiddleware = require("../middleware/authentication");

router
  .get("/authors/view-author/:authorId", getAuthor)
  .get("/authors/authors-list", getAllAuthors)
  .get("/profile", AuthenticationMiddleware, getProfile)
  .patch(
    "/authors/edit-author/:authorId",
    AuthenticationMiddleware,
    updateAuthor
  )
  .post("/signup", createAuthor)
  .delete(
    "/authors/delete-author/:authorId",
    AuthenticationMiddleware,
    deleteAuthor
  )
  .post("/login", loginAuthor);

module.exports = router;
