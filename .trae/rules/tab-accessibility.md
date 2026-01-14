# Tab Component Accessibility Standards

## Requirements
- Use `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Manage `aria-selected`, `aria-controls`, and focus order
- Arrow keys switch tabs; Home/End jump first/last

## Example Structure
```html
<div role="tablist" aria-label="Product info">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">Details</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">Specs</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

## Test Checklist
- Tablist uses `role="tablist"` and is labeled
- Tabs use `role="tab"` with `aria-selected` and `aria-controls`
- Tabpanels use `role="tabpanel"` linked via `aria-labelledby`
- Arrow keys switch tabs; Home/End jump to first/last
- Focus moves to the active tab and content visibility updates correctly
