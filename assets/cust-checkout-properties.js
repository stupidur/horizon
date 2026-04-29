/** InsCoder WANG.J 2026-04-29 B + Add installation_zip line item property before checkout submit **/
(function attachCheckoutPropertyUpdater() {
  const cartForm = document.getElementById('cart-form');
  if (!cartForm) return;

  let isUpdating = false;

  function isCheckoutSubmit(event) {
    const submitter = event.submitter;
    if (!submitter) return false;
    return submitter.name === 'checkout' || submitter.id === 'checkout';
  }

  async function getCart() {
    const response = await fetch('/cart.js', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) throw new Error(`Failed to load cart: ${response.status}`);
    return response.json();
  }

  async function updateLineItemProperty(item) {
    const nextProperties = { ...(item.properties || {}) };
    nextProperties.installation_zip = '666';

    const response = await fetch('/cart/change.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: item.key,
        quantity: item.quantity,
        properties: nextProperties,
      }),
    });

    if (!response.ok) throw new Error(`Failed to update item ${item.key}: ${response.status}`);

    console.log('[installation_zip] line item property updated', {
      key: item.key,
      installation_zip: nextProperties.installation_zip,
    });
  }

  cartForm.addEventListener('submit', async (event) => {
    if (!isCheckoutSubmit(event)) return;
    if (isUpdating) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    isUpdating = true;

    try {
      const cart = await getCart();
      for (const item of cart.items) {
        await updateLineItemProperty(item);
      }
      console.log('[installation_zip] all line item properties updated, redirecting to checkout');
      cartForm.submit();
    } catch (error) {
      console.error('[installation_zip] failed to update line item properties before checkout', error);
      cartForm.submit();
    } finally {
      isUpdating = false;
    }
  });
})();
/** InsCoder WANG.J 2026-04-29 E + Add installation_zip line item property before checkout submit **/
