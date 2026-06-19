import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl} - IP: ${req.ip}`);
  
  // Custom headers or db duplicate keys handling can be placed here if needed
  if (err.name === 'ValidationError') {
    res.status(400).json({
      success: false,
      errors: Object.keys(err.errors).map((key) => ({
        path: key,
        message: err.errors[key].message,
      })),
    });
    return;
  }

  if (err.code === 11000) {
    res.status(409).json({
      success: false,
      errors: [
        {
          path: Object.keys(err.keyValue).join(','),
          message: 'An enquiry with this value already exists.',
        },
      ],
    });
    return;
  }

  res.status(err.status || 500).json({
    success: false,
    errors: [
      {
        path: 'server',
        message: err.message || 'Internal Server Error',
      },
    ],
  });
};
