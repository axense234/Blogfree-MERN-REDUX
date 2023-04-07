const { StatusCodes } = require("http-status-codes");
const Blog = require("../models/Blog");
const Author = require("../models/Author");
const { TemplateAuthors, TemplateBlogs } = require("../data");

const createTemplateAuthors = async (req, res) => {
  const templateAuthors = await Author.create(TemplateAuthors);
  if (templateAuthors.length < 1) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong when creating template authors." });
  }
  return res
    .status(StatusCodes.CREATED)
    .json({ nbHits: templateAuthors.length, authors: templateAuthors });
};

const deleteAllAuthors = async (req, res) => {
  const deletedAuthors = await Author.deleteMany({});
  if (deletedAuthors.length < 1) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong when deleting all authors." });
  }
  return res
    .status(StatusCodes.OK)
    .json({ nbHits: deletedAuthors.length, authors: deletedAuthors });
};

const createTemplateBlogs = async (req, res) => {
  const templateBlogs = await Blog.create(TemplateBlogs);
  if (templateBlogs.length < 1) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong when creating template blogs." });
  }
  return res
    .status(StatusCodes.CREATED)
    .json({ nbHits: templateBlogs.length, authors: templateBlogs });
};

const deleteAllBlogs = async (req, res) => {
  const deletedBlogs = await Blog.deleteMany({});
  if (deletedBlogs.length < 1) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong when deleting all blogs." });
  }
  return res
    .status(StatusCodes.OK)
    .json({ nbHits: deletedBlogs.length, authors: deletedBlogs });
};

module.exports = {
  createTemplateAuthors,
  createTemplateBlogs,
  deleteAllAuthors,
  deleteAllBlogs,
};
