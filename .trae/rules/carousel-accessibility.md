# Carousel Accessibility Standards

## Requirements
- Provide controls: Previous, Next, Pause/Play
- Use `aria-roledescription="carousel"` and `aria-live="polite"`
- Manage focus and slide `aria-hidden`

## Example
```html
<div class="carousel" aria-roledescription="carousel" aria-live="polite">
  <button aria-label="Previous slide">Prev</button>
  <button aria-label="Next slide">Next</button>
  <button aria-pressed="false" aria-label="Pause autoplay">Pause</button>
  <div class="slides">
    <div class="slide" aria-hidden="false">...</div>
    <div class="slide" aria-hidden="true">...</div>
  </div>
</div>
```

## Test Checklist
- Carousel announces updates via `aria-live="polite"`
- Slides manage visibility with `aria-hidden`
- Controls include Previous/Next and Pause/Play
- Focus management is correct when controls are used
