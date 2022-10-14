import supertest from 'supertest';
import app from '../src/config/app';

const request = supertest(app);

describe('Testing app.ts', () => {
  test('It should respond the Get method', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body.data).toBe('Hello, world');
  });
});
