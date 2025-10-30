# Next.js Migrations

This directory contains Next.js migrations of ColdFusion example applications from the coldfusion-minute repository.

## Migrations

### 1. helloworld-1-request Migration

This is a Next.js migration of the ColdFusion `helloworld-1-request` example application.

### 2. fw1-crud Migration

This is a complete Next.js migration of the ColdFusion fw1-crud application, featuring a full-featured user management CRUD system.

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

---

# FW/1 CRUD Application Migration

## Overview

This is a complete migration of the FW/1 CRUD ColdFusion application to Next.js. The original application is a user management system demonstrating the Framework One (FW/1) MVC pattern with full CRUD operations, pagination, search functionality, and form validation.

## Original ColdFusion Application

The original application (`/fw1-crud/`):
- **Location**: `/fw1-crud/` directory
- **Framework**: Framework One (FW/1) 4.3.0-SNAPSHOT MVC framework
- **Database**: MySQL datasource named "test"
- **Features**:
  - User CRUD operations (Create, Read, Update, Delete)
  - Pagination (configurable page size, default 10)
  - Search by firstname or lastname
  - Form validation (login, firstname, lastname required)
  - Success/error messaging
  - Bootstrap 4 UI with navbar and responsive layout
  - Landing page with jumbotron hero section

### Original Architecture

**Controller** (`controllers/main.cfc`):
- `default()` - Landing page
- `list()` - Paginated user listing
- `form()` - Create/edit form
- `view()` - User detail view
- `save()` - Form submission with validation
- `delete()` - Delete user
- `search()` - Search users by name

**Service Layer** (`model/services/userService.cfc`):
- `getAll(page, pagesize)` - Paginated user retrieval
- `get(id)` - Single user by ID
- `saveUser(user)` - Insert or update user
- `delete(id)` - Delete user
- `find(searchterm)` - Search by firstname/lastname
- `getCount(searchterm)` - Count for pagination

**Model** (`model/beans/user.cfc`):
- Properties: id, login, firstname, lastname, description, level

**Database Schema** (from `/test.sql`):
```sql
CREATE TABLE users (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  login varchar(255) NOT NULL,
  firstname varchar(105) NOT NULL,
  lastname varchar(105) NOT NULL,
  description varchar(255) DEFAULT NULL,
  level tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (id),
  UNIQUE KEY login_UNIQUE (login)
)
```

## Next.js Implementation

### Architecture

**API Routes** (Backend):
- `GET /api/users` - List users with pagination and search
- `POST /api/users` - Create new user
- `GET /api/users/[id]` - Get single user
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

**Pages** (Frontend):
- `/` - Landing page with hero section
- `/users` - User list with table and pagination
- `/users/new` - Create user form
- `/users/[id]` - User detail view
- `/users/[id]/edit` - Edit user form
- `/users/[id]/delete` - Delete user (redirect action)

**Components**:
- `Layout` - Navbar with navigation and search
- `UserTable` - Reusable user table component
- `UserForm` - Reusable form for create/edit
- `Pagination` - Pagination controls

**Database**:
- In-memory store (data resets on server restart)
- Seeded with sample users from original test data
- Methods mirror original service layer

### Features Implemented

✅ **User CRUD Operations**
- Create new users with validation
- View user details
- Edit existing users
- Delete users

✅ **Pagination**
- Configurable page size (default 10)
- Previous/Next navigation
- Individual page number links
- Proper calculation of last page

✅ **Search**
- Search form in navbar
- Filter by firstname or lastname
- Case-insensitive matching

✅ **Validation**
- Login field required
- Firstname required
- Lastname required
- Server-side and client-side validation
- Error message display

✅ **UI/UX**
- Responsive layout with Tailwind CSS
- Navigation: Home, List, Add
- Success messages after operations
- Modern, clean design
- Mobile-friendly

### Project Structure

```
nextjs-app/
├── app/
│   ├── api/
│   │   └── users/
│   │       ├── route.ts              # List & create users
│   │       └── [id]/
│   │           └── route.ts          # Get, update, delete user
│   ├── components/
│   │   ├── Layout.tsx                # Navigation & footer
│   │   ├── Pagination.tsx            # Pagination controls
│   │   ├── UserTable.tsx             # User list table
│   │   └── UserForm.tsx              # Create/edit form
│   ├── lib/
│   │   ├── db.ts                     # In-memory database
│   │   └── types.ts                  # TypeScript interfaces
│   ├── users/
│   │   ├── page.tsx                  # User list
│   │   ├── new/
│   │   │   └── page.tsx              # Create user
│   │   └── [id]/
│   │       ├── page.tsx              # User detail
│   │       ├── edit/
│   │       │   └── page.tsx          # Edit user
│   │       └── delete/
│   │           └── page.tsx          # Delete user
│   ├── page.tsx                      # Landing page
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Global styles
├── __tests__/
│   ├── hello-world.test.ts           # HelloWorld tests
│   ├── users-api.test.ts             # API endpoint tests
│   ├── users-pages.test.ts           # Page rendering tests
│   └── users-crud.test.ts            # End-to-end CRUD tests
└── README.md                         # This file
```

## Getting Started

### Installation

```bash
cd nextjs-app
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

The test suite includes:
- API endpoint tests
- Page rendering tests
- End-to-end CRUD operation tests
- Search and pagination tests

### Building for Production

```bash
npm run build
npm run start
```

## Comparison with Original

| Aspect | CFML/FW1 Version | Next.js Version |
|--------|------------------|-----------------|
| **Framework** | Framework One 4.3 MVC | Next.js 16 App Router |
| **Language** | ColdFusion/CFML | TypeScript |
| **Database** | MySQL (persistent) | In-memory (resets on restart) |
| **Styling** | Bootstrap 4 | Tailwind CSS 4 |
| **Testing** | TestBox | Vitest + React Testing Library |
| **Routing** | FW/1 convention-based | Next.js file-based routing |
| **Controllers** | `main.cfc` | API routes + Server Components |
| **Services** | `userService.cfc` | `db.ts` functions |
| **Models** | `user.cfc` bean | TypeScript interfaces |
| **Views** | CFM templates | React components (JSX/TSX) |
| **Layouts** | CFM layouts | React Layout component |
| **Validation** | Server-side in controller | Server + client-side |
| **Session State** | ColdFusion sessions | In-memory store |

## Technical Notes

### In-Memory Database

The Next.js version uses an in-memory data store instead of MySQL:
- **Pros**: No database setup required, fast, perfect for demos
- **Cons**: Data is lost when the dev server restarts
- **Production**: Would be replaced with a real database (PostgreSQL, MySQL, etc.)

### API Design

The API follows RESTful conventions:
- GET for retrieval
- POST for creation
- PUT for updates
- DELETE for deletion
- Proper HTTP status codes (200, 201, 400, 404, 500)
- JSON request/response bodies

### Form Handling

Uses Next.js Server Actions indirectly through API routes:
- Client-side React state management
- Fetch API for form submission
- Server-side validation in API routes
- Client-side validation with HTML5
- Redirect with success messages via URL params

### Pagination Logic

Matches original FW/1 implementation:
- Integer division for last page calculation
- Offset-based slicing
- Handles edge cases (empty results, invalid pages)

### Search Implementation

Case-insensitive LIKE-style matching:
- Filters by firstname OR lastname
- JavaScript `.includes()` for string matching
- Returns filtered and paginated results

## Known Limitations

1. **In-Memory Database**: Data is not persisted between server restarts
2. **No Authentication**: Original app didn't have auth, neither does this
3. **Simplified Validation**: Description and level fields not validated
4. **No Level Display**: Level field exists but isn't prominently shown in UI
5. **Delete Confirmation**: Basic implementation without modal dialog

## Future Enhancements

Potential improvements for production use:
- [ ] Add persistent database (PostgreSQL/MySQL)
- [ ] Add authentication and authorization
- [ ] Add delete confirmation modal
- [ ] Add user profile images
- [ ] Add sorting by columns
- [ ] Add filtering by level
- [ ] Add export functionality (CSV, PDF)
- [ ] Add user activity logging
- [ ] Add email validation
- [ ] Add password management (original schema has passwd field)

## Testing

The test suite covers:

**API Tests** (`users-api.test.ts`):
- List users with pagination
- Search functionality
- Get single user
- Create user with validation
- Update user
- Delete user
- 404 handling

**Page Tests** (`users-pages.test.ts`):
- Landing page rendering
- User list page
- Create form
- Detail view
- Edit form

**CRUD Tests** (`users-crud.test.ts`):
- Full CRUD cycle (create → read → update → delete)
- Search functionality
- Pagination navigation

All tests use Vitest with fetch-based integration testing, following the same pattern as the helloworld-1-request migration.

## Development Notes

- The Next.js dev server must be running for tests to pass
- Tests make real HTTP requests to `http://localhost:3000`
- Use `TEST_URL` environment variable to override the base URL
- TypeScript provides type safety for User model and API responses
- Tailwind CSS provides utility-first styling
- All components are Server Components except where client interactivity is needed
