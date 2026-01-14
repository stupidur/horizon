# Animation Accessibility Standards

Ensures animations follow WCAG compliance and provide inclusive motion design for users with different accessibility needs.

## Respect Motion Preferences
```css
.fade-in { animation: fadeIn 0.3s ease-in-out; }
@media (prefers-reduced-motion: reduce) { .fade-in { animation: none; opacity: 1; } }
```

## Seizure Prevention (≤ 3Hz)
```css
.pulse { animation: pulse 0.4s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .pulse { animation: none; opacity: 0.8; } }
```

## Gentle Motion
```css
.slide-in { transform: translateX(20px); transition: transform 0.2s ease-out; }
@media (prefers-reduced-motion: reduce) { .slide-in { transform: none; transition: none; opacity: 1; } }
```

## Essential UI Animations
```css
.loading-spinner { animation: spin 1s linear infinite; }
@media (prefers-reduced-motion: reduce) { .loading-spinner { animation: spin 2s linear infinite; } }
```

## User Controls
```javascript
class AnimationController {
  constructor() { this.isPaused = false; this.animations = document.querySelectorAll('[data-animation]'); }
  togglePause() { this.isPaused = !this.isPaused; this.animations.forEach(el => { el.style.animationPlayState = this.isPaused ? 'paused' : 'running'; }); }
}
```

## Reduced Motion States
```css
.animated-element { opacity: 0; transform: translateY(20px); transition: all 0.3s ease-out; }
.animated-element.animate { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) { .animated-element { opacity: 1; transform: none; transition: none; } }
```

