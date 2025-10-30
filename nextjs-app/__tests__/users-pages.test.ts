import { describe, it, expect } from 'vitest';

describe('User Pages', () => {
  const baseUrl = process.env.TEST_URL || 'http://localhost:3000';

  it('should render landing page', async () => {
    const response = await fetch(baseUrl);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain('Hello, world!');
    expect(html).toContain('Proceed to user list');
  });

  it('should render users list page', async () => {
    const response = await fetch(`${baseUrl}/users`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain('Add New');
  });

  it('should render new user form', async () => {
    const response = await fetch(`${baseUrl}/users/new`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain('Create User');
  });

  it('should render user detail page', async () => {
    const response = await fetch(`${baseUrl}/users/1`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain('User details');
  });

  it('should render edit user form', async () => {
    const response = await fetch(`${baseUrl}/users/1/edit`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain('Edit User');
  });
});
