import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import enquiryRoutes from './routes/enquiryRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './config/logger';

const app = express();

// Apply security headers
app.use(helmet());

// Configure CORS
const allowedOrigins = [
  'http://localhost:5173', // Vite dev client
  'http://localhost:3000',
  process.env.CLIENT_URL,
].filter(Boolean) as string[];

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// JSON payload parser
app.use(express.json());

// Log HTTP requests
app.use((req, res, next) => {
  logger.http(`${req.method} ${req.originalUrl} - IP: ${req.ip}`);
  next();
});

// API Routes
app.use('/api/enquiry', enquiryRoutes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'up',
    timestamp: new Date().toISOString(),
  });
});

// Fallback for unhandled routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    errors: [
      {
        path: 'route',
        message: `Endpoint ${req.method} ${req.originalUrl} not found`,
      },
    ],
  });
});

// Global Error Handler
app.use(errorHandler);

export default app;
