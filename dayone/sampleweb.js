let cart = [];
let total = 0;

function addToCart(item, price, qtyId) {
  const quantity = parseInt(document.getElementById(qtyId).value);
  const existingItem = cart.find(cartItem => cartItem.name === item);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name: item, price: price, quantity: quantity });
  }
  
  total += price * quantity;
  updateCart();
}

function removeFromCart(item) {
  const index = cart.findIndex(cartItem => cartItem.name === item);
  
  if (index > -1) {
    total -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  const totalDiv = document.getElementById('total');

  cartDiv.innerHTML = cart.length > 0 
    ? cart.map(cartItem => 
        `${cartItem.name} (x${cartItem.quantity}) <button onclick="removeFromCart('${cartItem.name}')">Remove</button>`).join('<br>')
    : 'Your cart is empty.';
  
  totalDiv.innerHTML = `Total: $${total}`;
}

function showSection(section) {
  document.getElementById('home').style.display = section === 'home' ? 'block' : 'none';
  document.getElementById('about').style.display = section === 'about' ? 'block' : 'none';
}
