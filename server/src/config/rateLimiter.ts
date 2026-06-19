import rateLimit from 'express-rate-limit';

export const enquiryRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    errors: [
      {
        path: 'rate-limit',
        message: 'Too many registration requests. Please try again after 15 minutes.',
      },
    ],
  },
});
