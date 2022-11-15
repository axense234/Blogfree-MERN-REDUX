const { StatusCodes } = require("http-status-codes");
const Blog = require("../models/Blog");

const getBlog = async (req, res) => {
  const { blogId } = req.params;
  if (!blogId)
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Id is shit" });

  const FoundBlog = await Blog.findById(blogId);
  if (!FoundBlog)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `Could not find blog with id: ${blogId}` });

  return res.status(StatusCodes.OK).json(FoundBlog);
};

const getAllBlogs = async (req, res) => {
  let foundBlogs = [];
  const { searchQuery, limit } = req.query;
  if (limit) {
    foundBlogs = await Blog.find({})
      .sort({
        title: 1,
      })
      .limit(limit);
  } else {
    foundBlogs = await Blog.find({}).sort({
      title: 1,
    });
  }
  if (searchQuery) {
    foundBlogs = foundBlogs.filter((blog) => blog.title.includes(searchQuery));
  }
  return res
    .status(StatusCodes.OK)
    .json({ nbHits: foundBlogs.length, blogs: foundBlogs });
};

const createBlog = async (req, res) => {
  const { ...newBlog } = req.body;
  const CreatedBlog = await Blog.create(newBlog);
  if (!CreatedBlog)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Coult not create blog." });

  return res.status(StatusCodes.CREATED).json(CreatedBlog);
};

const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  const { ...newBlog } = req.body;
  const UpdatedBlog = await Blog.findByIdAndUpdate(blogId, newBlog, {
    new: true,
    runValidators: true,
  });
  if (!UpdatedBlog)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Could not update blog." });

  return res.status(StatusCodes.OK).json(UpdatedBlog);
};

const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  const DeletedBlog = await Blog.findByIdAndDelete(blogId);
  if (!DeletedBlog)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Could not delete blog." });

  return res.status(StatusCodes.OK).json(DeletedBlog);
};

module.exports = {
  getBlog,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
