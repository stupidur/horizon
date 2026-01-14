# Breadcrumb Accessibility Standards

## Guidelines
- Use `nav` with `aria-label="Breadcrumb"`
- Use ordered list `<ol>` for breadcrumb items
- Include current page with `aria-current="page"`

## Example
```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumbs">
    <li><a href="/">Home</a></li>
    <li><a href="/collections">Collections</a></li>
    <li aria-current="page">Sunglasses</li>
  </ol>
</nav>
```

## Test Checklist
- Navigation uses `nav` with `aria-label="Breadcrumb"`
- Structure uses ordered list `<ol>` for items
- Current page uses `aria-current="page"`
