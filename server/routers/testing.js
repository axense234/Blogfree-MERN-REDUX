const express = require("express");
const router = express.Router();

const {
  createTemplateAuthors,
  createTemplateBlogs,
  deleteAllAuthors,
  deleteAllBlogs,
} = require("../controllers/testing");

router.post("/dev/template-authors", createTemplateAuthors);
router.post("/dev/template-blogs", createTemplateBlogs);

router.delete("/dev/delete-authors", deleteAllAuthors);
router.delete("/dev/delete-blogs", deleteAllBlogs);

module.exports = router;
