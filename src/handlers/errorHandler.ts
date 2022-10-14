import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test' ||
    error.constructor.name === 'object'
  ) {
    res.locals = {
      data: error.message,
      status: res.locals.status ?? 400,
    };

    return next();
  }

  res.locals = {
    data: 'Server internal error',
    status: 500,
  };

  return next();
};

export default errorHandler;
