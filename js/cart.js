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
  for (var i = 0; i < cart.items.length; i++) {
    var newRow = document.createElement('tr');
    tableBody.appendChild(newRow);
    var newTd = document.createElement('td');
    newTd.innerHTML = `<a id="idx${i}" class="removeItem" href="#">X</a>`;
    newRow.appendChild(newTd);
    newTd = document.createElement('td');
    newTd.textContent = cart.items[i].quantity;
    newRow.appendChild(newTd);
    newTd = document.createElement('td');
    newTd.innerHTML = `<img src="${
      Product.allProducts[cart.items[i].product].filePath
    }" /> `;
    newRow.appendChild(newTd);
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  for (var i = 0; i < tableRows.length; i++) {
    var tableRows = document.getElementsByClassName('removeItem')[i];
    tableRows[i].document.addEventListener('click', function() {
      cart.removeItem(i);
    });
  }
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
