# coldfusion-minute

Examples of CFML code for **Adobe ColdFusion 2023** and **Lucee 6**, including database access, ORM, providing and consuming JSON and XML APIs.

## Requirements

- **Adobe ColdFusion 2023** (LTS) or **Lucee 6.x** (latest stable)
- Java 11+ (as required by the CFML engines above)
- [CommandBox](https://www.ortussolutions.com/products/commandbox) (recommended for local development)
- MySQL (for database / ORM examples)

## Getting Started

1. Install [CommandBox](https://www.ortussolutions.com/products/commandbox).
2. Clone this repository.
3. Start the server:
   ```bash
   box server start
   ```
   This will launch a local Lucee 6 server using the included `server.json`.
4. Open `http://localhost:8080` in your browser.

## Project Structure

| Directory                   | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `fw1-crud/`                 | Full CRUD app using Framework One (FW/1)         |
| `templates-1-helloworld/`   | Basic CFML template                              |
| `templates-2-output/`       | Output and display examples                      |
| `templates-3-includes/`     | Template includes                                |
| `templates-4-variables/`    | Variable scopes and lifecycle                    |
| `templates-5-loops/`        | Control structures and loops                     |
| `helloworld-1-request/` through `helloworld-7-exceptions/` | Progressive CFML concepts |
| `orm-1-entities/`           | Basic ORM entity operations                      |
| `orm-2-relationships/`      | ORM relationships (one-to-many)                  |
| `orm-3-blog/`               | Blog application using ORM                       |
| `http-1-get/`               | HTTP client examples                             |
| `google-1-translate/`       | Google Translate REST API integration            |
| `html-css-basics/`          | Frontend layout patterns                         |
| `tests/`                    | TestBox test suite                               |

## CFML Engines

This project targets the following LTS / stable CFML engine versions:

- **[Lucee 6](https://lucee.org)** - A light-weight, high-performance CFML engine for the JVM.
- **[Adobe ColdFusion 2023](https://www.adobe.com/products/coldfusion-family.html)** - Adobe's official ColdFusion platform (LTS release).

## Testing

Tests use [TestBox](https://www.ortussolutions.com/products/testbox). To run:

```bash
box install
box testbox run
```

## License

[MIT](LICENSE)

## Design

Design template used for blog: https://github.com/BlackrockDigital/startbootstrap-clean-blog
