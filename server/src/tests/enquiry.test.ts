import request from 'supertest';
import app from '../app';
import { connectDB, closeDB, inMemoryDb } from '../config/db';

describe('Enquiry API Endpoints', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await closeDB();
  });

  beforeEach(() => {
    // Clear mock in-memory db before each test
    inMemoryDb.length = 0;
  });

  describe('GET /health', () => {
    it('should return 200 OK and health status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('status', 'up');
    });
  });

  describe('POST /api/enquiry', () => {
    it('should successfully record a valid enquiry submission', async () => {
      const payload = {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        phone: '9876543210',
      };

      const res = await request(app)
        .post('/api/enquiry')
        .send(payload);

      expect(res.statusCode).toEqual(201);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe('Registration successful');
      expect(res.body.data).toHaveProperty('name', payload.name);
      expect(res.body.data).toHaveProperty('email', payload.email);
      expect(res.body.data).toHaveProperty('phone', payload.phone);
      expect(res.body.data).toHaveProperty('_id');
    });

    it('should fail with status 400 when name is missing or too short', async () => {
      const payload = {
        name: 'A', // Too short
        email: 'john.doe@example.com',
        phone: '9876543210',
      };

      const res = await request(app)
        .post('/api/enquiry')
        .send(payload);

      expect(res.statusCode).toEqual(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors).toBeInstanceOf(Array);
      expect(res.body.errors[0]).toHaveProperty('path', 'name');
    });

    it('should fail with status 400 when email format is invalid', async () => {
      const payload = {
        name: 'John Doe',
        email: 'invalid-email-address',
        phone: '9876543210',
      };

      const res = await request(app)
        .post('/api/enquiry')
        .send(payload);

      expect(res.statusCode).toEqual(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors).toBeInstanceOf(Array);
      expect(res.body.errors[0]).toHaveProperty('path', 'email');
    });

    it('should fail with status 400 when phone number format is invalid', async () => {
      const payload = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '12345', // Too short
      };

      const res = await request(app)
        .post('/api/enquiry')
        .send(payload);

      expect(res.statusCode).toEqual(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors).toBeInstanceOf(Array);
      expect(res.body.errors[0]).toHaveProperty('path', 'phone');
    });
  });

  describe('GET /api/enquiry', () => {
    it('should return a list of submitted enquiries', async () => {
      // First populate one record
      const payload = {
        name: 'Neha Sharma',
        email: 'neha@example.com',
        phone: '9988776655',
      };
      await request(app).post('/api/enquiry').send(payload);

      const res = await request(app).get('/api/enquiry');
      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
      expect(res.body.data.length).toBe(1);
      expect(res.body.data[0].name).toBe(payload.name);
    });
  });
});
