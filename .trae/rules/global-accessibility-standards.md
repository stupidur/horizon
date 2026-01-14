# Global Scope Accessibility Standards

Ensures global accessibility best practices are followed including page language, viewport meta tag, title attribute usage, and skip link implementation for WCAG compliance.

## Best Practices

### Page Language (WCAG 3.1.1 Language of Page)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content in English -->
  </body>
</html>
```

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Avoid disabling zoom: `maximum-scale=1.0`, `user-scalable=no`.

### Title Attribute Usage

- Avoid `title` on non-iframe elements; use visible text or `aria-*`.
- Iframes must have descriptive `title`.

### Skip Link Implementation (WCAG 2.4.1)
```html
<body>
  <a href="#main" class="skip-link visuallyhidden focusable">Skip to main content</a>
  <main id="main" tabindex="-1">...</main>
</body>
```

#### CSS
```css
.visuallyhidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.focusable:focus { position: static; width: auto; height: auto; padding: 8px 16px; margin: 0; overflow: visible; clip: auto; background: #000; color: #fff; text-decoration: none; border-radius: 4px; z-index: 1000; }
```

### Complete Example
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Web Page</title>
  </head>
  <body>
    <a href="#main" class="skip-link">Skip to main content</a>
    <main id="main" role="main" tabindex="-1">...</main>
  </body>
</html>
```

