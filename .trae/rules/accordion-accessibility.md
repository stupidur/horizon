# Accordion Component Accessibility Standards

## Goals
- Comply with WCAG and the WAI-ARIA Accordion pattern
- Maintain consistent semantics and interactions across templates and front-end code

## Mandatory Compliance Rules
- Header interactive element uses `role="button"` (or native `<button>`)
- Header button must have `aria-expanded="true|false"`
- Header button must have `aria-controls` referencing the associated panel's unique `id`
- Heading container uses native `h1–h6`, or `role="heading"` with `aria-level="1–6"`
- Each panel must have a unique `id` (for `aria-controls` references)
- If a panel uses `role="region"`, it must set `aria-labelledby` pointing to the heading element
- Header button must support keyboard: Enter/Space (required), Arrow/Home/End (optional)
- Panel must support Escape to close and return focus to the corresponding header button

## Keyboard Interaction Requirements
- Enter/Space: toggle expansion/collapse of the current panel
- Tab/Shift+Tab: follow page order through focusable elements
- Down/Up Arrow (optional): navigate between multiple headers
- Home/End (optional): jump to the first/last header
- Escape (within panel): close the panel and restore focus to the header button

## Structural Requirements
- The header button is the only child inside the heading container
- Each panel `id` is unique and one-to-one with `aria-controls`
- Prefer native heading elements; use `role="heading"` with `aria-level` only when necessary
- Use `role="region"` sparingly when there are more than 6 panels

## Example: Single Accordion Item
```html
<div class="accordion-item">
  <h3 role="heading" aria-level="3" id="header-1">
    <button aria-expanded="false" aria-controls="panel-1">Section Title</button>
  </h3>
  <div id="panel-1" role="region" aria-labelledby="header-1" hidden>
    <p>Panel content...</p>
  </div>
</div>
```

## Example: Escape Close and State Management (JavaScript)
```javascript
function toggleAccordion(button) {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  const panel = document.getElementById(button.getAttribute('aria-controls'));

  button.setAttribute('aria-expanded', (!expanded).toString());
  panel.hidden = expanded;

  if (!expanded) {
    panel.addEventListener('keydown', onPanelEscape);
  } else {
    panel.removeEventListener('keydown', onPanelEscape);
  }
}

function onPanelEscape(e) {
  if (e.key !== 'Escape') return;
  const panel = e.currentTarget;
  const button = document.querySelector(`[aria-controls="${panel.id}"]`);
  if (!button) return;
  button.setAttribute('aria-expanded', 'false');
  panel.hidden = true;
  button.focus();
  panel.removeEventListener('keydown', onPanelEscape);
}
```

## Example: Using Native Heading Elements
```html
<div class="accordion-item">
  <h3 id="header-2">
    <button aria-expanded="false" aria-controls="panel-2">Section Title</button>
  </h3>
  <div id="panel-2" aria-labelledby="header-2" hidden>
    <p>Panel content...</p>
  </div>
</div>
```

## Test Checklist
- Verify header button: correct `role`, `aria-expanded`, and `aria-controls`
- Verify heading container: native `h*` or `role="heading" + aria-level`
- Verify panel: unique `id`; if `role="region"`, ensure `aria-labelledby`
- Verify keyboard interactions: Enter/Space, Tab order, optional Arrow/Home/End
- Verify panel supports Escape to close and correctly returns focus to the header button
- Verify screen readers correctly announce expand/collapse state and heading/panel association
