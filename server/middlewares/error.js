/* eslint no-unused-vars: ["off", { "varsIgnorePattern": "next" }] */
import mongoose from "mongoose";
import httpStatus from "http-status";
import config from "../config/config";
import logger from "../config/logger";
import ErrorResponse from "../utils/errorResponse";

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (config.env === "production" && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    success: false,
    code: statusCode,
    message,

    ...(config.env === "development" && { stack: err.stack }),
  };

  if (config.env === "development") {
    logger.error(err);
  }

  res.status(statusCode).json({ response });
};

const errorConverter = (err, req, res, next) => {
  let error = err;
  const statusCode =
    error.statusCode || error instanceof mongoose.Error
      ? httpStatus.BAD_REQUEST
      : httpStatus.INTERNAL_SERVER_ERROR;

  const message = error.message || httpStatus[statusCode];

  if (!(error instanceof ErrorResponse)) {
    error = new ErrorResponse(statusCode, message, false, err.stack);
  }

  errorHandler(new ErrorResponse(message, statusCode), req, res);
};

export { errorConverter, errorHandler };
