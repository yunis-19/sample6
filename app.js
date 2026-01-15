const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menulinks.classList.toggle('active')

} );

let cart = [];

function toggleCart() {
  document.getElementById('cart__drawer').classList.toggle('active');
}

function AddToCart(name, price) {
  const item = { name: name, price: price } ;
  cart.push(item);
  updateCartUI();

  const btn = window.Event.target;
  const originalText = btn.innerText;
  const originalBg = btn.style.background
  
  btn.style.background = 'green';
  btn.style.color = '#fff';
  btn.innerText = "✓ Added";
  
  setTimeout(() => {
    btn.innerText = originalText;
    btn.style.background = originalBg;
    btn.style.color = '';
  }, 1000);
}

function updateCartUI () {
  const list = document.getElementById ('cart__items-lists');
  const countBadge = document.getElementById('cart__count');
  const totalDisplay = document.getElementById('total-price');

  list.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: #fff; margin-top: 20px;">Your cart is empty.</p>';
} else {
    cart.forEach ((item, index) => {
      total += item.price;
      const itemEl = document.createElement('div');
      itemEl.className = 'cart__item';
      itemEl.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid #e7e2e2ff; color:#fff;";
      itemEl.innerHTML = `
        <div>
        <strong>${item.name}</strong><br>
        <small>₱${item.price.toFixed(2)}</small>
        </div>
        <div class="remove_btn">
        <button onclick="removeFromCart(${index})" style="background: none; border:none; color: #fff; cursor: pointer;">Remove</button>
        </div>
      `;
      list.appendChild(itemEl);
    });
  }
    countBadge.innerText = cart.length;
    totalDisplay.innerText = `₱${total.toFixed(2)}`;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
 
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert ("Thank you for your order! Total: ₱" + total.toFixed(2));

cart = [];
updateCartUI();
toggleCart();
}

function placeOrder() {
    if (cart.length === 0) return alert("Add items first!");
    alert("Order Placed Successfully!");
    cart = [];
    updateCartUI();
    toggleCart();
}


const homeLink = document.getElementById('homeLink');
const productsLink = document.getElementById('productsLink');
const benefitsLink = document.getElementById('benefitsLink');

homeLink.addEventListener('click', (e) => { 
  console.log("Navigating to Home...");
});

productsLink.addEventListener('click', (e) => {
  console.log("Navigating to Products...");
}); 

benefitsLink.addEventListener('click', (e) => {
  console,log("Navigating to Benefits...");
});



