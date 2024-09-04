function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = { id, name, price };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} has been added to your cart.`);
}

document.getElementById("clear-items").onclick = function () {
  localStorage.removeItem("cart");
  window.location.reload();
};
