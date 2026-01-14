# Table Accessibility Standards

## Guidelines
- Provide `<caption>` describing table purpose
- Use `<th scope="col|row">` for headers
- Associate data with headers via scope or `headers` attribute
- Ensure responsive alternatives for small screens

## Example
```html
<table>
  <caption>Size Chart</caption>
  <thead>
    <tr>
      <th scope="col">Size</th>
      <th scope="col">Chest</th>
      <th scope="col">Waist</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">S</th>
      <td>34-36"</td>
      <td>28-30"</td>
    </tr>
  </tbody>
</table>
```

## Test Checklist
- Table includes a descriptive `<caption>`
- Header cells use `<th>` with appropriate `scope`
- Data cells associate with headers via `scope` or `headers`
- Responsive alternative provided or table remains usable on small screens
