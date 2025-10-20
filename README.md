# Login with MFA - React Application

A modern, artistic React application implementing a complete login system with Multi-Factor Authentication (MFA), signup flow, and role-based dashboard. Features stunning glassmorphism UI design with animated backgrounds, comprehensive form validation, and robust Cypress testing.

## Features

- ** Secure Authentication Flow**
  - Email and password validation
  - Multi-Factor Authentication (MFA) with 6-digit code
  - Complete signup flow with validation
  - Role-based access control (read-only vs read-write)

- ** Artistic UI Design**
  - Glassmorphism design with backdrop blur effects
  - Animated geometric backgrounds with floating shapes
  - Color-themed pages (Blue/Purple, Green/Emerald, Orange/Amber, Purple/Violet)
  - Smooth animations and transitions
  - Responsive design with Tailwind CSS

- ** Comprehensive Testing**
  - Cypress E2E tests for critical user flows
  - Form validation testing
  - Complete login-to-dashboard flow testing

## Prerequisites

- **Node.js**: Version 14 or higher (LTS recommended)
- **npm**: Included with Node.js
- **Git**: To clone the repository

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RohitSingh5632/login-mfa.git
   cd login-mfa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## How to Run the Application

### Development Mode
```bash
npm start
```
The application will open in your browser at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## How to Run the Tests

### Cypress E2E Tests

**Option 1: Interactive Mode (Recommended)**
```bash
npm run cypress:open
```
This opens the Cypress Test Runner where you can:
- See all available tests
- Run tests individually or all at once
- Watch tests run in real-time with visual feedback
- Debug tests interactively

**Option 2: Headless Mode**
```bash
npm run cypress:run
# or
npm run test:e2e
```
Runs all tests in headless mode (no browser UI) - useful for CI/CD pipelines.

### Test Cases Included

The test suite includes **3 meaningful test cases**:

1. **Invalid Email Validation**
   - Tests email format validation
   - Verifies error message display
   - Ensures proper form validation

2. **Password Length Validation**
   - Tests minimum password length requirement (8 characters)
   - Verifies error message for short passwords
   - Ensures security requirements are met

3. **Complete Login Flow**
   - Tests successful login with valid credentials
   - Verifies MFA verification step
   - Confirms dashboard access after authentication
   - Validates role-based access control

## Demo Credentials

For testing purposes, use these credentials:
- **Email**: `user@example.com`
- **Password**: `Password123!`
- **MFA Code**: `123456`

## Project Structure

```
login-mfa/
├── src/
│   ├── components/
│   │   ├── Login.js          # Login page with artistic background
│   │   ├── Signup.js         # Signup page with glassmorphism design
│   │   ├── MFA.js            # MFA verification page
│   │   └── Dashboard.js      # Role-based dashboard
│   ├── utils/
│   │   └── mockApi.js        # Mock API for authentication
│   ├── App.js                # Main application component
│   ├── index.js              # Application entry point
│   └── index.css             # Global styles and animations
├── cypress/
│   ├── integration/
│   │   └── login.spec.js     # E2E test cases
│   ├── support/
│   │   ├── commands.js       # Custom Cypress commands
│   │   └── e2e.js           # Cypress configuration
│   └── fixtures/
│       └── example.json      # Test data
├── public/
│   └── index.html           # HTML template
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Cypress** - End-to-end testing framework
- **Custom CSS Animations** - Artistic background effects
- **Glassmorphism Design** - Modern UI design pattern

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs React unit tests
- `npm run cypress:open` - Opens Cypress Test Runner (interactive mode)
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run test:e2e` - Alternative command for running E2E tests

## GitHub Repository

**Repository**: https://github.com/RohitSingh5632/login-mfa

---

## Contact

**Developer**: Rohit Singh  
**Repository**: https://github.com/RohitSingh5632/login-mfa

For questions, demo requests, or technical discussions, please feel free to reach out!
