# CLAUDE.md

## Rules Learned from the Assignment

1. **Be explicit in prompts**  
   - Copilot responds much better when the instructions are detailed.  
   - Vague prompts lead to incomplete or generic code, while spec-driven prompts produce structured, validated, and testable solutions.  
   - Lesson: Always specify fields, validation rules, architecture, and testing requirements.

2. **Request tests directly**  
   - Copilot will not generate automated tests unless explicitly asked.  
   - By including “write unit tests with Vitest” in the prompt, Copilot created a proper test suite.  
   - Lesson: Testing is not optional—make it part of the specification.

3. **Guide architecture and structure**  
   - Without guidance, Copilot places everything in a single file or flat structure.  
   - With spec-driven prompts, it organizes code into components, utils, and tests.  
   - Lesson: Define folder structure and separation of concerns in the prompt.

---

## Conclusion
The assignment showed that Copilot adapts to the level of detail provided. Writing clear, spec-driven prompts is essential to achieve professional-quality code with validations, tests, and maintainable architecture.


