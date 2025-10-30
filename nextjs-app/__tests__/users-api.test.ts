import { describe, it, expect } from 'vitest';

describe('Users API', () => {
  const baseUrl = process.env.TEST_URL || 'http://localhost:3000';

  it('should list users with pagination', async () => {
    const response = await fetch(`${baseUrl}/api/users?page=1&pagesize=10`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.data).toBeInstanceOf(Array);
    expect(data.count).toBeGreaterThan(0);
    expect(data.page).toBe(1);
    expect(data.pagesize).toBe(10);
  });

  it('should search users by name', async () => {
    const response = await fetch(`${baseUrl}/api/users?searchterm=Anakin`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.data).toBeInstanceOf(Array);
    expect(data.data.length).toBeGreaterThan(0);
  });

  it('should get a single user by id', async () => {
    const response = await fetch(`${baseUrl}/api/users/1`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.data.id).toBe(1);
    expect(data.data.login).toBeDefined();
  });

  it('should return 404 for non-existent user', async () => {
    const response = await fetch(`${baseUrl}/api/users/9999`);

    expect(response.status).toBe(404);
  });

  it('should create a new user', async () => {
    const newUser = {
      login: 'testuser',
      firstname: 'Test',
      lastname: 'User',
      description: 'Test description',
      level: 5
    };

    const response = await fetch(`${baseUrl}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.data.login).toBe('testuser');
    expect(data.data.firstname).toBe('Test');
  });

  it('should validate required fields when creating user', async () => {
    const invalidUser = {
      login: '',
      firstname: 'Test',
      lastname: 'User'
    };

    const response = await fetch(`${baseUrl}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidUser),
    });

    expect(response.status).toBe(400);
  });
});
