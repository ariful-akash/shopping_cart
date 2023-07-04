const cart = [];

function addToCart(product, ...quantities) {
  for (let i = 0; i < quantities.length; i++) {
    const quantity = quantities[i];
    if (quantity > 0) {
      const item = { product, quantity };
      cart.push(item);
    }
  }
}

function displayCart() {
  const cartElement = document.getElementById('shopping-cart');
  cartElement.innerHTML = '';

  cart.forEach((item) => {
    const { product, quantity } = item;
    const itemTotal = product.price * quantity;

    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <p>${product.name} (Quantity: ${quantity})</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Total: $${itemTotal.toFixed(2)}</p>
    `;

    cartElement.appendChild(itemElement);
  });

  const totalAmount = cart.reduce((sum, item) => {
    const itemTotal = item.product.price * item.quantity;
    return sum + itemTotal;
  }, 0);

  const totalElement = document.createElement('div');
  totalElement.innerHTML = `<p>Total Amount: $${totalAmount.toFixed(2)}</p>`;
  cartElement.appendChild(totalElement);
}

function clearCart() {
  cart.length = 0;
}

export { addToCart, displayCart, clearCart };
