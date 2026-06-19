import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/db';
import { logger } from './config/logger';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to Database (falls back to memory model if fails/missing env)
  await connectDB();

  const server = app.listen(PORT, () => {
    logger.info(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });

  // Handle graceful shutdown
  const shutdown = () => {
    logger.info('Shutting down server gracefully...');
    server.close(() => {
      logger.info('Express server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
};

startServer().catch((error) => {
  logger.error(`Critical error starting server: ${error.message}`);
  process.exit(1);
});
