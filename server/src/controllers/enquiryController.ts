import { Request, Response, NextFunction } from 'express';
import { EnquiryService } from '../services/enquiryService';

export class EnquiryController {
  public static async createEnquiry(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, email, phone } = req.body;
      const enquiry = await EnquiryService.createEnquiry({ name, email, phone });

      res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: enquiry,
      });
    } catch (error) {
      next(error);
    }
  }

  public static async getEnquiries(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const enquiries = await EnquiryService.getAllEnquiries();
      res.status(200).json({
        success: true,
        data: enquiries,
      });
    } catch (error) {
      next(error);
    }
  }
}
