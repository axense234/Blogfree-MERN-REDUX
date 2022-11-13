const Author = require("../models/Author");
const { StatusCodes } = require("http-status-codes");

const getAuthor = async (req, res) => {
  const { authorId } = req.params;

  const AuthorFound = await Author.findById(authorId);
  if (!AuthorFound) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Author not found", code: 404 });
  }

  return res.status(StatusCodes.OK).json(AuthorFound);
};

const getAllAuthors = async (req, res) => {
  const { searchQuery, limit } = req.query;
  let AuthorsFound = [];
  if (limit) {
    AuthorsFound = await Author.find({})
      .sort({
        username: 1,
      })
      .limit(limit);
  } else {
    AuthorsFound = await Author.find({}).sort({
      username: 1,
    });
  }
  if (searchQuery) {
    AuthorsFound = AuthorsFound.filter((author) => {
      return author.username.to;
    });
  }
  return res
    .status(StatusCodes.OK)
    .json({ nbHits: AuthorsFound.length, authors: AuthorsFound });
};

const updateAuthor = async (req, res) => {
  const { authorId } = req.params;
  const { id } = req.user;
  const { ...newAuthor } = req.body;

  console.log(newAuthor);

  const AuthorFoundAndUpdated = await Author.findByIdAndUpdate(
    authorId || id,
    newAuthor,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!AuthorFoundAndUpdated) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "Author not found." });
  }

  return res.status(StatusCodes.OK).json(AuthorFoundAndUpdated);
};

const createAuthor = async (req, res) => {
  const { ...newAuthor } = req.body;
  console.log(newAuthor);

  const CreatedAuthor = await Author.create(newAuthor);

  if (!CreatedAuthor) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Lmao didnt work creating the author." });
  }

  const token = CreatedAuthor.createJWT();
  console.log("created author in controller");

  return res.status(StatusCodes.CREATED).json({
    token,
    author: CreatedAuthor,
    msg: `Created user with id: ${CreatedAuthor._id}`,
  });
};

const deleteAuthor = async (req, res) => {
  const { authorId } = req.params;

  const DeletedAuthor = await Author.findByIdAndDelete(authorId);
  if (!DeletedAuthor) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Could not find the author you wanted to delete." });
  }

  return res.status(StatusCodes.OK).json(DeletedAuthor);
};

const loginAuthor = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (!username) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter a username!" });
  }
  if (!email) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter a email!" });
  }
  if (!password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter a password!" });
  }

  // Getting the user by email
  const foundUser = await Author.findOne({ email });
  if (!foundUser) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `No user found with email: ${email}` });
  }

  const doPasswordsMatch = await foundUser.comparePasswords(password);
  if (!doPasswordsMatch) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Passwords do not match!" });
  }
  if (!(foundUser.username.trim() === username.trim())) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Usernames do not match!" });
  }

  const token = foundUser.createJWT();
  return res.status(StatusCodes.OK).json({ token });
};

const getProfile = async (req, res) => {
  const { id } = req.user;

  const AuthorFound = await Author.findById(id);
  console.log("get profile backend");
  if (!AuthorFound) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Author not found", code: 404 });
  }

  return res.status(StatusCodes.OK).json(AuthorFound);
};

module.exports = {
  getAuthor,
  getAllAuthors,
  updateAuthor,
  createAuthor,
  deleteAuthor,
  loginAuthor,
  getProfile,
};
