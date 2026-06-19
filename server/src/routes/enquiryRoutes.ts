import { Router } from 'express';
import { EnquiryController } from '../controllers/enquiryController';
import { validateRequest } from '../middleware/validate';
import { enquirySchema } from '../schemas/enquirySchema';
import { enquiryRateLimiter } from '../config/rateLimiter';

const router = Router();

// POST /api/enquiry - Rate limited & Validated
router.post(
  '/',
  enquiryRateLimiter,
  validateRequest(enquirySchema),
  EnquiryController.createEnquiry
);

// GET /api/enquiry - Retrieve list of enquiries (primarily for test checks/admin)
router.get('/', EnquiryController.getEnquiries);

export default router;
