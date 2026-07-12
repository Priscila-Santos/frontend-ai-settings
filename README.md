## Project: Frontend AI Settings Form

### Overview
This project demonstrates the use of AI-assisted coding with Copilot in VS Code. The goal was to generate a settings form using two different approaches:
1. **Vague Prompt** – a short, general instruction.
2. **Spec-Driven Prompt** – a detailed specification including validations, architecture, and tests.

By comparing these approaches, the project highlights how prompt quality directly impacts the resulting code.

---

### Features
- **React + Vite setup** with modern tooling.
- **Settings form** including:
  - Username (required, minimum 3 characters)
  - Email (required, valid format)
  - Enable notifications (checkbox)
  - Update frequency (dropdown: Daily, Weekly, Monthly)
- **Validation rules** to ensure data integrity.
- **Automated tests** using Vitest and React Testing Library.
- **Responsive design** with CSS modules.

---

### Branches
- **main** → Base branch with documentation (`WORKFLOW.md`, `CLAUDE.md`, `README.md`).  
- **feature/vague-prompt** → Form generated from a vague prompt, minimal validation, no tests.  
- **feature/spec-driven** → Form generated from a detailed prompt, complete validations, structured architecture, and automated tests.

---

### Documentation
- **WORKFLOW.md** → Explains the difference between vague and spec-driven prompts.  
- **CLAUDE.md** → Lists rules learned during the assignment.  
- **README.md** → Provides project description and usage instructions.

---

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Priscila-Santos/frontend-ai-settings.git
   ```
2. Navigate to the project folder:
   ```bash
   cd frontend-ai-settings
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Run tests:
   ```bash
   npm test
   ```

---

### Conclusion
This project illustrates the importance of prompt engineering in AI-assisted development. Vague prompts are useful for quick prototypes, while spec-driven prompts produce production-ready, validated, and testable applications.


