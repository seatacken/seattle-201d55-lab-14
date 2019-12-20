/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.

var selectElement = document.getElementById('items');
function populateForm() {

  //Done!: Add an <option> tag inside the form's select for each product
 
 
  for (var i in Product.allProducts) {
    var newOption = document.createElement('option');
    newOption.textContent = Product.allProducts[i].name;
    selectElement.appendChild(newOption);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // Done!: Prevent the page from reloading

  // Do all the things ...

  addSelectedItemToCart();
  // cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  document.getElementById('catalog').reset();
}



// Done: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // Done: suss out the item picked from the select list
  var customerChoice = selectElement.selectedIndex;
  // Done: get the quantity
  var selectedQuantity = document.getElementById('quantity').value;
  // Done: using those, add one item to the Cart
  cart.addItem(customerChoice, selectedQuantity);
}

// Done: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var cartCount = document.getElementById('itemCount');
  cartCount.textContent = cart.items.length;
}

// Done: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var cartContents = document.getElementById('cartContents');
  cartContents.innerHTML = '';
  var newUl = document.createElement('ul');
  cartContents.appendChild(newUl);
  for(var i = 0; i < cart.items.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = `${Product.allProducts[cart.items[i].product].name} Qty: ${cart.items[i].quantity}`;
    newUl.appendChild(newLi);
  }
  // Done: Get the item and quantity from the form
  // Done: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
