# Tooltip Accessibility Standards

## Guidelines
- Prefer visible helper text over title attribute
- Use `role="tooltip"` and `aria-describedby` for accessible tooltips
- Ensure keyboard focus can reveal and dismiss tooltips

## Example
```html
<button aria-describedby="submit-tooltip">Submit</button>
<div id="submit-tooltip" role="tooltip">Click to submit your form</div>
```

## Test Checklist
- Tooltip content uses `role="tooltip"`
- Trigger references tooltip via `aria-describedby`
- Tooltip is accessible via keyboard and dismissible
- No misuse of `title` attribute for essential information
