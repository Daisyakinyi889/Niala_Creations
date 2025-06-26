// shop.js - Includes hamburger toggle + cart badge and nav link sync

const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartDrawer = document.getElementById("cart-drawer");
const floatingCart = document.getElementById("floating-cart");
const drawerList = document.getElementById("drawer-cart-items");
const drawerTotal = document.getElementById("drawer-cart-total");
const cartBadge = document.getElementById("cart-badge");
const cartLink = document.getElementById("cart-link");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

if (cartList && cartTotal) {
  const cartItems = [];

  function updateCart() {
    cartList.innerHTML = "";
    drawerList.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cartItems.forEach((item, index) => {
      const text = `${item.name} (x${item.quantity}) - KES ${item.price * item.quantity}`;
      const removeBtn = `<button class=\"remove-item\" data-index=\"${index}\">Remove</button>`;

      const li1 = document.createElement("li");
      li1.innerHTML = `${text} ${removeBtn}`;
      cartList.appendChild(li1);

      const li2 = document.createElement("li");
      li2.textContent = text;
      drawerList.appendChild(li2);

      total += item.price * item.quantity;
      itemCount += item.quantity;
    });

    cartTotal.textContent = total;
    drawerTotal.textContent = total;

    if (cartBadge) cartBadge.textContent = itemCount;
    if (cartLink) cartLink.innerHTML = `🛒 Cart (${itemCount})`;
  }

  // Toggle cart drawer
  if (floatingCart && cartDrawer) {
    floatingCart.addEventListener("click", () => {
      cartDrawer.classList.toggle("show");
    });
  }

  // Handle Add to Cart buttons
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseInt(button.getAttribute("data-price"));

      const existingItem = cartItems.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      updateCart();
    });
  });

  // Handle Remove from main cart section
  cartList.addEventListener("click", e => {
    if (e.target.classList.contains("remove-item")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      cartItems.splice(index, 1);
      updateCart();
    }
  });
}
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
