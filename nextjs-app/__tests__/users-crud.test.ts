import { describe, it, expect } from 'vitest';

describe('User CRUD Operations', () => {
  const baseUrl = process.env.TEST_URL || 'http://localhost:3000';

  it('should complete full CRUD cycle', async () => {
    const newUser = {
      login: 'crudtest',
      firstname: 'CRUD',
      lastname: 'Test',
      description: 'Test user for CRUD',
      level: 1
    };

    const createResponse = await fetch(`${baseUrl}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    expect(createResponse.status).toBe(201);
    const createData = await createResponse.json();
    const userId = createData.data.id;
    expect(userId).toBeDefined();

    const readResponse = await fetch(`${baseUrl}/api/users/${userId}`);
    expect(readResponse.status).toBe(200);
    const readData = await readResponse.json();
    expect(readData.data.login).toBe('crudtest');

    const updateData = {
      firstname: 'Updated',
      lastname: 'Name'
    };

    const updateResponse = await fetch(`${baseUrl}/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    expect(updateResponse.status).toBe(200);
    const updatedData = await updateResponse.json();
    expect(updatedData.data.firstname).toBe('Updated');

    const deleteResponse = await fetch(`${baseUrl}/api/users/${userId}`, {
      method: 'DELETE',
    });

    expect(deleteResponse.status).toBe(200);

    const verifyResponse = await fetch(`${baseUrl}/api/users/${userId}`);
    expect(verifyResponse.status).toBe(404);
  });

  it('should handle search functionality', async () => {
    const response = await fetch(`${baseUrl}/api/users?searchterm=Yoda`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.data.some((user: { firstname: string }) => user.firstname === 'Yoda')).toBe(true);
  });

  it('should handle pagination', async () => {
    const response = await fetch(`${baseUrl}/api/users?page=1&pagesize=2`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.data.length).toBeLessThanOrEqual(2);
    expect(data.lastPage).toBeGreaterThanOrEqual(1);
  });
});
