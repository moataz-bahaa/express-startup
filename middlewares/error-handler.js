import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    status: 'error',
    message: err.message ?? 'Internal server error',
  };

  res.status(defaultError.statusCode).json(defaultError);
};

export default errorHandler;
