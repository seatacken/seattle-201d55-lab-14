/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

var tableBody = document.getElementsByTagName('tbody')[0];


function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Maybe Done: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tableBody.innerHTML = '';
}

// Somewhat TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table body
  for(var i = 0; i < cart.items.length; i++) {
    var newRow = document.createElement('tr');
    tableBody.appendChild(newRow);
    var newTd = document.createElement('td');
    newTd.textContent = ` Qty: `;
    newRow.appendChild(newTd);
    newTd = document.createElement('td');
    newTd.textContent = ` something: `;
    newRow.appendChild(newTd);
    newTd = document.createElement('td');
    newTd.textContent = ` else: `;
    newRow.appendChild(newTd);
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
