# Form Accessibility Standards

Ensures form components follow WCAG compliance and provide proper accessibility for all users including screen reader users and keyboard-only users.

## Label Requirements
- Labels MUST be programmatically associated with inputs
- Labels MUST contain meaningful, descriptive text
- Labels MUST be visible to users
- Labels MUST NOT rely solely on visual characteristics

### Implementation
```html
<label for="username">Username</label>
<input type="text" id="username" name="username">

<input type="text" aria-label="Search products" placeholder="Enter search term">

<h3 id="address-heading">Shipping Address</h3>
<input type="text" aria-labelledby="address-heading" name="street">
```

## Required Field Indicators
```html
<label for="email">Email Address <span class="required" aria-label="required">*</span></label>
<input type="email" id="email" name="email" required aria-required="true" aria-describedby="email-help">
<small id="email-help" class="help-text">We'll use this to send you order confirmations</small>
```

## Input Groups
```html
<fieldset>
  <legend>Contact Preferences</legend>
  <label for="email-notifications"><input type="checkbox" id="email-notifications" name="notifications[]" value="email">Email Notifications</label>
  <label for="sms-notifications"><input type="checkbox" id="sms-notifications" name="notifications[]" value="sms">SMS Notifications</label>
</fieldset>
```

## Input Purpose
```html
<input type="text" id="full-name" name="fullName" autocomplete="name">
<input type="email" id="email-address" name="email" autocomplete="email">
<input type="tel" id="phone-number" name="phone" autocomplete="tel">
```

## Error Handling
```html
<input type="password" id="password" name="password" aria-describedby="password-requirements password-error" aria-invalid="false">
<small id="password-requirements" class="help-text">Password must be at least 8 characters with uppercase, lowercase, and number</small>
<div id="password-error" class="error-message" role="alert" hidden>Password does not meet requirements</div>
```

## Success/Error Message Focus Management
```javascript
function focusHeading(id) {
  const container = document.getElementById(id);
  const heading = container?.querySelector('h2, h3');
  requestAnimationFrame(() => { heading?.focus(); heading?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
}
```

## Semantic Structure
```html
<div class="container">
  <section class="form-section" aria-labelledby="instructions-heading">
    <h2 id="instructions-heading">Form Instructions</h2>
    <small id="form-instructions" class="help-text"></small>
  </section>
  <main role="main" aria-labelledby="main-heading">
    <h2 id="main-heading" class="sr-only">Form Content</h2>
    <form id="main-form"></form>
  </main>
</div>
```

