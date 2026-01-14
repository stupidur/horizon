# JavaScript Standards

## General Principles

- **Zero external dependencies** - Use native browser APIs
- **Avoid mutation** - Use `const` over `let` unless necessary
- **Use `for (const item of items)`** over `items.forEach()`
- **Add new lines before blocks** with `{` and `}`
- **Use the component framework** - See component framework documentation

## Async/Await Syntax

**Always use async/await over .then() chaining:**

```javascript
const fetchProducts = async () => {
  try {
    const response = await fetch('/products.json');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};
```

## Web Components Pattern

**Initialize JavaScript components using the Component framework:**

```javascript
import { Component } from '@theme/component';

/**
 * @typedef {Object} ProductCardRefs
 * @property {HTMLButtonElement} addButton - Add to cart button
 * @property {HTMLElement} priceDisplay - Price display element
 * @property {HTMLImageElement} [productImage] - Optional product image
 */

/**
 * @extends {Component<ProductCardRefs>}
 */
class ProductCard extends Component {
  constructor() {
    super();
    this.cache = new Map();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#initializeCard();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#cleanup();
  }

  updatePrice(newPrice) {
    if (!this.refs.priceDisplay) return;
    this.refs.priceDisplay.textContent = newPrice;
  }

  async handleAddToCart(event) {
    event.preventDefault();

    const productId = this.cache.get('productId');
    this.refs.addButton.disabled = true;
    this.refs.addButton.textContent = 'Adding...';

    try {
      await addToCart(productId);
      this.refs.addButton.textContent = 'Added!';

      this.dispatchEvent(new CustomEvent('cart:item-added', {
        detail: { productId },
        bubbles: true
      }));
    } catch (error) {
      this.refs.addButton.textContent = 'Try again';
      console.error('Add to cart error:', error);
    } finally {
      setTimeout(() => {
        this.refs.addButton.disabled = false;
        this.refs.addButton.textContent = 'Add to cart';
      }, 2000);
    }
  }

  #initializeCard() {
    const productId = this.dataset.productId;
    this.cache.set('productId', productId);
  }

  #cleanup() {
    this.cache.clear();
  }
}

const addToCart = async (productId) => {
  const formData = new FormData();
  formData.append('id', productId);
  formData.append('quantity', 1);

  try {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    const cartData = await response.json();
    return cartData;
  } catch (error) {
    console.error('Add to cart error:', error);
    throw error;
  }
};

customElements.define('product-card', ProductCard);
```

## Early Returns and Conditional Logic

**Use early returns over nested conditionals:**

```javascript
const processOrder = (order) => {
  if (!order) return;
  if (!order.items.length) return;
  if (order.status !== 'pending') return;

  updateOrderStatus(order.id, 'processing');
  sendConfirmationEmail(order.email);
};
```

## Simplification Patterns

**Ternary operators for simple conditions:**
```javascript
const buttonText = isLoading ? 'Loading...' : 'Add to cart';
element.textContent = buttonText;
```

**One-liner conditionals:**
```javascript
if (isOutOfStock) return;
```

**Return boolean comparisons directly:**
```javascript
const isAvailable = product.available && product.price > 0;
return isAvailable;
```

## Event-Driven Architecture

**Use events for component communication:**

```javascript
import { Component } from '@theme/component';

class CartDrawer extends Component {
  handleCartUpdate() {
    const itemCount = this.getItemCount();

    if (this.refs.itemCountDisplay) {
      this.refs.itemCountDisplay.textContent = itemCount;
    }

    this.dispatchEvent(new CustomEvent('cart:updated', {
      bubbles: true,
      detail: { itemCount }
    }));
  }
}
```

## JavaScript in Liquid Files

**Use `{% javascript %}` tags for component-specific scripts:**

```liquid
{% javascript %}
// component code here
{% endjavascript %}
```

## File Structure

**Group scripts by feature area:**
- `product.js` - All product-related classes
- `cart.js` - Cart functionality
- `collection.js` - Collection and filtering
- `search.js` - Search functionality

## Error Handling

**Always handle errors gracefully:**

```javascript
const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};
```

