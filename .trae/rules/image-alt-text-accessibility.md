# Image Alt Text Accessibility Standards

## Rules
- Informative images require descriptive `alt`
- Decorative images use empty `alt=""`
- Complex images need adjacent text or `aria-describedby`

## Test Checklist
- Informative images include meaningful `alt` text
- Decorative images use `alt=""` and are ignored by AT
- Complex images have adjacent descriptions or `aria-describedby`
- No redundant `alt` duplicating nearby visible text
