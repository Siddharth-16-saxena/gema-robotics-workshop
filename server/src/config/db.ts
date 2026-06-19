import mongoose from 'mongoose';
import { logger } from './logger';

export let isInMemory = false;
export const inMemoryDb: any[] = [];

export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    logger.warn(
      'MONGODB_URI is not configured. falling back to simulated local in-memory storage.'
    );
    isInMemory = true;
    return;
  }

  try {
    // Set connection options
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
    });
    logger.info('MongoDB Connected successfully.');
    isInMemory = false;
  } catch (error: any) {
    logger.error(
      `MongoDB connection failed: ${error.message}. Falling back to in-memory mode.`
    );
    isInMemory = true;
  }
};

export const closeDB = async (): Promise<void> => {
  if (!isInMemory) {
    await mongoose.connection.close();
    logger.info('MongoDB connection closed.');
  }
};
