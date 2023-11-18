import { StatusCodes } from 'http-status-codes';
import { MESSAGES } from './constants.js';

class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

export class NotFoundError extends CustomError {
  constructor(message) {
    super(message ?? MESSAGES.NOT_FOUND);
    this.statusCode = StatusCodes.NOT_FOUND;
    this.error = message ?? MESSAGES.NOT_FOUND;
  }
}

export class BadRequestError extends CustomError {
  constructor(message) {
    super(message ?? MESSAGES.BAD_REQUEST);
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.error = message ?? MESSAGES.BAD_REQUEST;
  }
}

export class UnAuthenticatedError extends CustomError {
  constructor(message) {
    super(message ?? MESSAGES.UNAUTHENTICATED);
    this.statusCode = StatusCodes.UNAUTHORIZED;
    this.error = message ?? MESSAGES.UNAUTHENTICATED;
  }
}
export class ForbidenError extends CustomError {
  constructor(message) {
    super(message ?? MESSAGES.UNAUTHENTICATED);
    this.statusCode = StatusCodes.FORBIDDEN;
    this.error = message ?? MESSAGES.UNAUTHENTICATED;
  }
}
