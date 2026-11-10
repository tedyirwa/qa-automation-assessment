# QA Automation Assessment

This project contains UI and API automation tests using Playwright with JavaScript.

## Tools

- JavaScript
- Playwright
- Node.js
- GoRest API
- Page Object Model (POM)

## Test Coverage

### UI Testing – SauceDemo

- Login with valid credentials
- Sort products by name (A to Z and Z to A)
- Sort products by price (low to high and high to low)
- Complete product checkout

### API Testing – GoRest

- Create a user
- Get a user
- Update a user

API calls are also included in the checkout UI test.

## Project Structure

- `fixtures/` – Reusable test fixtures
- `pages/` – Page Object Model classes
- `tests/` – UI and API test files
- `docs/` – Gherkin test scenarios

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Create a `.env` file in the project root and add your GoRest API token:

```env
GOREST_TOKEN=your_gorest_token
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/
```

Run API tests:

```bash
npx playwright test tests/api/
```

## Test Result

All 27 tests passed in the latest test execution.
