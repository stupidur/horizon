# Modal Accessibility Standards

## Requirements
- Use `role="dialog"` with `aria-modal="true"`
- Focus trap and return focus on close
- Close on Escape; label via `aria-labelledby`

## Example
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Newsletter Signup</h2>
  <button aria-label="Close">Close</button>
  <form>
    <label for="email">Email</label>
    <input id="email" type="email">
    <button type="submit">Subscribe</button>
  </form>
</div>
```

## Test Checklist
- Dialog has `role="dialog"` and `aria-modal="true"`
- Dialog is labeled via `aria-labelledby` or `aria-label`
- Escape closes dialog and returns focus to the trigger
- Focus is trapped within dialog while open
- Initial focus set to a meaningful control when opened
