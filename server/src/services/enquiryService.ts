import { Enquiry } from '../models/enquiryModel';
import { isInMemory, inMemoryDb } from '../config/db';
import { logger } from '../config/logger';

export class EnquiryService {
  public static async createEnquiry(data: {
    name: string;
    email: string;
    phone: string;
  }): Promise<any> {
    if (isInMemory) {
      const simulatedEnquiry = {
        _id: `mock_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      inMemoryDb.push(simulatedEnquiry);
      logger.info(`Simulated Enquiry Saved (InMemory): ${JSON.stringify(simulatedEnquiry)}`);
      return simulatedEnquiry;
    }

    const newEnquiry = new Enquiry(data);
    const saved = await newEnquiry.save();
    logger.info(`Database Enquiry Saved (MongoDB): ${saved._id}`);
    return saved;
  }

  public static async getAllEnquiries(): Promise<any[]> {
    if (isInMemory) {
      return inMemoryDb;
    }
    return Enquiry.find().sort({ createdAt: -1 });
  }
}
