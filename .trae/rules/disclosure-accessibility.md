# Disclosure Accessibility Standards

## Requirements
- Use `<details>`/`<summary>` or button + controlled region
- Manage `aria-expanded` and `aria-controls`
- Ensure keyboard support

## Test Checklist
- Summary/button toggles `aria-expanded` correctly
- Controlled region has unique `id` referenced by `aria-controls`
- Keyboard interactions work (Enter/Space, Escape when applicable)
