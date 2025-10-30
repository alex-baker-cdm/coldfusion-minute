import { describe, it, expect } from 'vitest'

describe('HelloWorld Request Example', () => {
  const baseUrl = process.env.TEST_URL || 'http://localhost:3000'

  it('should output "Hello, world!" when accessed', async () => {
    const response = await fetch(baseUrl)
    const html = await response.text()
    
    expect(html).toContain('Hello, world!')
    expect(response.status).toBe(200)
  })

  it('should have content type text/html', async () => {
    const response = await fetch(baseUrl)
    const contentType = response.headers.get('content-type')
    
    expect(contentType).toContain('text/html')
  })
})
