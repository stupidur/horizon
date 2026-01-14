# Modern HTML Standards

Use the latest evergreen browser features for better user experience and simpler code.
All features should be supported in the last two versions of all major browsers.
All necessary features must be "Baseline widely available".
Progressive enhancement features may be "Baseline 2024".
These are strictly for UX improvements that are non-blocking for conversions.

## Native Interactive Elements

**Expandable Content:**
- Use `<details>` and `<summary>` instead of JavaScript toggles
- Perfect for FAQs, product details, filters
- See the accordion component for cases where animation is involved

**Modals and Popups:**
- Use `<dialog>` for modals instead of custom overlays
- Built-in focus management and backdrop clicks
- See the dialog component for how we use these

**Tooltips and Menus:**
- Use `popover` attribute for floating content
- Automatic positioning and dismissal

**Forms:**
- Use `<search>` element for search forms
- Use `<output>` for form calculations and results

### Input Types (HTML5+)
```html
<input type="text">        <!-- Basic text input -->
<input type="email">       <!-- Email with validation -->
<input type="tel">         <!-- Telephone numbers -->
<input type="url">         <!-- URLs with validation -->
<input type="search">      <!-- Search field with clear button -->
<input type="password">    <!-- Password field -->

<!-- Numeric inputs -->
<input type="number">      <!-- Numeric input with spinner -->
<input type="range">       <!-- Slider control -->

<!-- Date/Time inputs -->
<input type="date">        <!-- Date picker -->
<input type="time">        <!-- Time picker -->
<input type="datetime-local"> <!-- Date and time picker -->
<input type="month">       <!-- Month picker -->
<input type="week">        <!-- Week picker -->

<!-- Selection inputs -->
<input type="checkbox">    <!-- Checkbox -->
<input type="radio">       <!-- Radio button -->
<input type="color">       <!-- Color picker -->
<input type="file">        <!-- File upload -->

<!-- Action inputs -->
<input type="submit">      <!-- Submit button -->
<input type="reset">       <!-- Reset button -->
<input type="button">      <!-- Generic button -->
<input type="image">       <!-- Image button -->

<!-- Hidden -->
<input type="hidden">      <!-- Hidden data -->
```

### Container Elements
```html
<!-- Form container -->
<form>                     <!-- Form wrapper -->
<fieldset>                 <!-- Group related inputs -->
<legend>                   <!-- Fieldset label -->

<!-- Modern semantic containers -->
<search>                   <!-- Search form container (HTML5.3) -->
```

### Text Areas
```html
<textarea>                 <!-- Multi-line text input -->
```

### Selection Elements
```html
<select>                   <!-- Dropdown menu -->
<option>                   <!-- Option in dropdown -->
<optgroup>                 <!-- Group options -->
<datalist>                 <!-- Autocomplete suggestions -->
```

### Labels and Output
```html
<label>                    <!-- Input label -->
<output>                   <!-- Calculation/result display -->
```

### Buttons
```html
<button type="submit">     <!-- Submit form -->
<button type="reset">      <!-- Reset form -->
<button type="button">     <!-- Generic button -->
```

### Progress and Meters
```html
<progress>                 <!-- Progress indicator -->
<meter>                    <!-- Gauge/measurement display -->
```

### Modern Form Attributes
```html
<!-- Validation attributes -->
required                   <!-- Field must be filled -->
pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" <!-- Regex validation -->
minlength="5"              <!-- Minimum character length -->
maxlength="50"             <!-- Maximum character length -->
min="1"                    <!-- Minimum numeric value -->
```

