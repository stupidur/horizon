# Dropdown Navigation Accessibility Standards

## Guidelines
- Button toggles with `aria-expanded` and `aria-controls`
- Menu uses `role="menu"`, items use `role="menuitem"`
- Close on Escape, manage focus within menu

## Example
```html
<button aria-expanded="false" aria-controls="nav-menu" id="nav-button">Menu</button>
<ul id="nav-menu" role="menu" hidden>
  <li role="menuitem"><a href="/collections">Collections</a></li>
  <li role="menuitem"><a href="/sale">Sale</a></li>
</ul>
```

## Test Checklist
- Trigger has `aria-expanded` and `aria-controls` referencing menu `id`
- Menu uses `role="menu"`, items use `role="menuitem"`
- Escape closes menu and restores focus to trigger
- Tab/Shift+Tab navigation is logical within and around the menu
- `aria-expanded` state updates correctly when toggling
