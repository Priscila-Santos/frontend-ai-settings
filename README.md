# Frontend AI settings (Spec-Driven Version)

## Overview
This branch demonstrates the outcome of using a **spec-driven AI prompt** with Copilot in VS Code. Unlike the vague prompt version, this implementation follows a detailed specification, resulting in a more robust, validated, and testable React + Vite application.

---

## Features
- **React + Vite setup** with modern tooling.
- **Settings form** including:
  - Username (required, minimum 3 characters)
  - Email (required, valid format)
  - Enable notifications (checkbox, default checked)
  - Update frequency (dropdown: Daily, Weekly, Monthly)
- **Validation rules**:
  - Username must not be empty and must have at least 3 characters.
  - Email must follow a valid format.
  - Update frequency must be selected.
- **Automated tests**:
  - Implemented with Vitest and React Testing Library.
  - Unit tests for each validation rule.
  - Integration tests for form submission.
- **Architecture**:
  - Components organized under `src/components`.
  - Validation logic separated into `src/utils/validation.js`.
  - Tests located in `src/tests`.
- **Styling**:
  - Responsive design using CSS modules.

---

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app at the URL shown by Vite (usually `http://localhost:5173`).
4. Run tests:
   ```bash
   npm test
   ```

---

## Notes
- This branch emphasizes **spec-driven development**: clear requirements lead to structured code, validations, and automated tests.  
- Compared to the vague prompt branch, this version is closer to production-ready quality.  
- Additional improvements (e.g., TypeScript, advanced validation libraries, CI integration) can be added as extensions.
