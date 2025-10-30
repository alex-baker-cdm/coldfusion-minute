# Next.js Migration of helloworld-1-request

This is a Next.js migration of the ColdFusion `helloworld-1-request` example application.

## Overview

The original CFML application (`/helloworld-1-request/Application.cfc`) uses the `onRequest()` method to output "Hello World!". This Next.js version accomplishes the same functionality using a standard React page component.

## Original CFML Application

The original application:
- Location: `/helloworld-1-request/Application.cfc`
- Implementation: Uses `onRequest()` method to output "Hello World!" via `writeOutput()`
- Tests: `/tests/specs/HelloWorldRequestSpec.cfc` validates:
  - Response contains "Hello World!"
  - Status code is 200
  - Content-Type is text/html

## Next.js Implementation

This Next.js version:
- Uses App Router with TypeScript
- Simple page component that renders "Hello World!"
- Equivalent tests using Vitest that validate the same three conditions

## Getting Started

### Installation

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see "Hello World!".

### Running Tests

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

The tests validate:
1. Response contains "Hello World!"
2. Status code is 200
3. Content-Type includes "text/html"

### Building for Production

```bash
npm run build
npm run start
```

## Technology Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Testing**: Vitest with React Testing Library
- **Runtime**: Node.js with React 19

## Project Structure

```
nextjs-app/
├── app/
│   ├── page.tsx          # Main "Hello World!" page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── __tests__/
│   └── hello-world.test.ts  # Integration tests
├── vitest.config.ts      # Vitest configuration
├── vitest.setup.ts       # Test setup
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Comparison with Original

| Aspect | CFML Version | Next.js Version |
|--------|--------------|-----------------|
| Entry Point | `Application.cfc::onRequest()` | `app/page.tsx` |
| Output Method | `writeOutput()` | JSX return statement |
| Testing Framework | TestBox | Vitest |
| Test Approach | HTTP requests to Lucee server | HTTP requests to Next.js dev server |
| Runtime | Lucee/ColdFusion | Node.js |

## Notes

- The Next.js dev server must be running for integration tests to pass
- Tests make real HTTP requests to validate the full request/response cycle
- This migration demonstrates a 1:1 functional equivalence with the original CFML application
