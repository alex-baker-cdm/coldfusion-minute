# OpenAPI/Swagger Documentation

This directory contains OpenAPI 3.0 specifications for the APIs in the coldfusion-minute repository.

## API Specifications

### fw1-crud-api.yaml

User Management API built with Framework One (FW/1) MVC framework.

**Base URL:** `http://localhost:8888/examples/fw1-crud`

**Endpoints:**
- `GET /` - Landing page
- `GET /main/list` - List users with pagination
- `GET /main/form` - Create/edit user form
- `GET /main/view` - View user details
- `POST /main/save` - Create or update user
- `GET /main/delete` - Delete user
- `GET /main/search` - Search users by name

### orm-3-blog-api.yaml

Blog API demonstrating Lucee ORM with entity relationships.

**Base URL:** `http://localhost:8888/examples/orm-3-blog`

**Endpoints:**
- `GET /` - Landing page with latest post
- `GET /index.cfm?route=posts` - List all posts
- `GET /index.cfm?route=post&id={id}` - View single post
- `GET /index.cfm?route=new` - New post form
- `POST /index.cfm?route=do_post` - Create new post
- `GET /index.cfm?route=authors` - List all authors
- `GET /index.cfm?route=author&id={id}` - View single author
- `GET /index.cfm?route=comments` - List all comments
- `POST /index.cfm?route=do_comment` - Create new comment

## Viewing the Documentation

You can view these OpenAPI specifications using:

1. **Swagger Editor:** Import the YAML files at https://editor.swagger.io/
2. **Swagger UI:** Use a local Swagger UI instance or online viewer
3. **VS Code:** Install the OpenAPI (Swagger) Editor extension
4. **Redoc:** Use https://redocly.github.io/redoc/ for a clean documentation view

## Running the APIs Locally

1. Ensure Lucee service is running: `sudo /opt/lucee/lucee_ctl status`
2. If not running, start it: `sudo /opt/lucee/lucee_ctl start`
3. Access the APIs at `http://localhost:8888/examples/`

## Notes

- These APIs return HTML responses (server-rendered pages) rather than JSON
- The fw1-crud application requires a MySQL datasource named "test" with a `users` table
- The orm-3-blog application uses Lucee ORM with `users`, `posts`, and `comments` tables
