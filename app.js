import products from './product.js';
import { addToCart, displayCart, clearCart } from './cart.js';

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId = event.target.dataset.productId;
    const product = products.find((p) => p.id === parseInt(productId));
    addToCart(product, 1); // Add a fixed quantity of 1 for now
    displayCart();
  });
});

document.getElementById('clear-cart').addEventListener('click', () => {
  clearCart();
  displayCart();
});