const ErrorHandlerMiddleware = async (err, req, res, next) => {
  let customError = {
    msg: err.message || "Something is wrong with the server.",
    code: err.StatusCode || 500,
  };

  console.log(err);

  return res.status(customError.code).json({ msg: customError.msg });
};

module.exports = ErrorHandlerMiddleware;
