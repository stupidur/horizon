# Combobox Accessibility Standards

## Requirements
- Use `role="combobox"` with an input
- Link listbox via `aria-controls` and `aria-expanded`
- Manage active option with `aria-activedescendant`

## Example
```html
<input role="combobox" aria-controls="results" aria-expanded="false" aria-activedescendant="result-1">
<ul role="listbox" id="results">
  <li id="result-1" role="option" aria-selected="true">Option A</li>
  <li id="result-2" role="option">Option B</li>
  </ul>
```

## Test Checklist
- Input uses `role="combobox"` and is properly labeled
- `aria-controls` references a `role="listbox"` with unique `id`
- `aria-expanded` reflects open/closed state
- `aria-activedescendant` points to the active `role="option"`
- Arrow keys move active option; Enter selects; Escape closes
