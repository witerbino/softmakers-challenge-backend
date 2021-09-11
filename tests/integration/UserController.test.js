import app from '../../src/app.js';
import request from 'supertest';

describe('#UserController', () => {
  it('should return a new created user', async () => {
    const data = { 
      name: 'any_name', 
      email: 'any_email@mail.com', 
      password: '123456' 
    };

    const { body, status } = await request(app)
      .post('/api/register')
      .send(data);

    expect(status).toEqual(201);
    expect(body.user).toHaveProperty('id');
    expect(body.user.name).toEqual(data.name);
    expect(body.user.email).toEqual(data.email);
  });
});