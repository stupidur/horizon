# Cart Drawer Accessibility Standards

## Guidelines
- Drawer uses `role="dialog"` with `aria-modal="true"`
- Provide close button and focus trap
- Announce updates via `aria-live`

## Example
```html
<div role="dialog" aria-modal="true" aria-labelledby="cart-title">
  <h2 id="cart-title">Your Cart</h2>
  <button aria-label="Close cart">Close</button>
  <div aria-live="polite">Item added</div>
</div>
```

## Test Checklist
- Drawer uses `role="dialog"` with `aria-modal="true"`
- Drawer is labeled via `aria-labelledby` or `aria-label`
- Escape closes drawer and returns focus
- Focus is trapped while drawer is open
- Announcements use `aria-live` for updates
