const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  //console.log(err);
  //res.status(500).json({ msg: err });
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ msg: `Something Went Wrong, try again Later` });
};

module.exports = errorHandlerMiddleware;
