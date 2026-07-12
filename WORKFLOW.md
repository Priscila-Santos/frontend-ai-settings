# WORKFLOW.md

## Overview
This document explains the workflow followed during the assignment. It compares the outcomes of using a vague prompt versus a spec-driven prompt with Copilot in VS Code. The goal is to highlight differences in clarity, code quality, validation, and testing.

---

## Vague Prompt Workflow
- **Prompt style:** The vague prompt was short and general, asking Copilot to create a settings form without detailed specifications.  
- **Resulting code:**  
  - Copilot generated a basic React + Vite form with fields like Username, Email, Notifications, and Update Frequency.  
  - The structure was simple, with minimal separation of concerns.  
  - Validation was either missing or very basic.  
  - No automated tests were included.  
- **Advantages:** Quick to generate, useful for prototyping.  
- **Limitations:** Lack of robustness, missing validations, no testing, and less maintainable architecture.

---

## Spec-Driven Prompt Workflow
- **Prompt style:** The spec-driven prompt was detailed, listing exact fields, validation rules, architecture, and testing requirements.  
- **Resulting code:**  
  - Copilot generated a more complete project structure with `src/components`, `src/utils`, and `src/tests`.  
  - Validations were implemented (e.g., required Username, valid Email format, mandatory Update Frequency).  
  - Automated tests were created using Vitest and React Testing Library.  
  - The form was styled with CSS modules and made responsive.  
- **Advantages:** Clearer structure, maintainable code, validations enforced, and confidence through tests.  
- **Limitations:** More time-consuming to write the prompt and to set up dependencies, but the output was significantly higher quality.

---

## Comparison
| Aspect              | Vague Prompt                        | Spec-Driven Prompt                          |
|---------------------|-------------------------------------|---------------------------------------------|
| **Clarity**         | Low, Copilot guessed requirements   | High, requirements explicitly defined       |
| **Validation**      | Minimal or missing                  | Complete and enforced                       |
| **Testing**         | None                                | Automated tests included                    |
| **Architecture**    | Flat, less organized                | Structured with components and utils        |
| **Use Case**        | Fast prototyping                    | Production-ready with reliability           |

---

## Lessons Learned
1. **Prompt specificity matters:** The more detailed the instructions, the better the code quality.  
2. **Testing requires explicit request:** Copilot will not add tests unless asked directly.  
3. **Architecture improves with guidance:** Spec-driven prompts lead to cleaner separation of concerns.  
4. **Balance speed vs. quality:** Vague prompts are faster but risk missing critical functionality.  
5. **Iterative refinement:** Combining vague and spec-driven approaches can help—start vague for prototyping, then refine with specs.

---

## Conclusion
The experiment demonstrates that vague prompts are useful for quick drafts, while spec-driven prompts are essential for reliable, maintainable, and testable applications. Writing detailed prompts is a skill that directly impacts the quality of AI-generated code.
