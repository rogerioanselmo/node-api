import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('working');
});

describe('GET /', () => {
  it('should return "working"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('working');
  });
});