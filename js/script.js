function createItemProduct(product)
{
  var newItem;
  var newElm;

  newItem = document.createElement("div");
  newItem.setAttribute("class", "item")

  newElm = createItemFigure(product);
  newItem.appendChild(newElm);

  newElm = document.createElement("p");
  newElm.setAttribute("class", "item-description");
  newElm.innerHTML = product.description;
  newItem.appendChild(newElm);

  newElm = document.createElement("p");
  newElm.setAttribute("class", "item-price");
  newElm.innerHTML = "$" + product.price.toFixed(2);
  newItem.appendChild(newElm);

  newElm = document.createElement("button");
  newElm.setAttribute("onclick", "onClickAdd('" + product.name + "')");
  newElm.innerHTML = "Add to Cart";
  newItem.appendChild(newElm);

  return newItem;
}

// update <div id="items"> from productList array
function updateItemContainer(productList)
{
  var container = document.getElementById("items");

  container.innerHTML = "";

  if (productList.length == 0) {
    container.innerHTML = "No items matching filter.";
  } else {
    for (product of productList) {
      container.appendChild(createItemProduct(product));
    }
  }
}

// update the list of products
function updateProductList()
{
  var itemSort = '';
  var itemFilter = '';

  if (typeof document.filterForm != 'undefined') {
    itemSort = document.filterForm.sortBy.value;
    itemFilter = document.filterForm.filterBy.value;
  }

  // pageProduct
  var prodList = createProductList(itemSort, itemFilter);

  updateItemContainer(prodList);
}

/*
- Loop through object, output each value to console 
*/
//for (i = 0; i < products.length; i++) {
//    console.log(products[i].name + ". " + products[i].description + ". " + products[i].price);
//}

//function capture () {
//  console.log(document.scarfInfo.filter.value);
//  event.preventDefault();
//}

/* Function for sum in cart */
//TODO: trigger on change of cart contents
function sumPrices(cartArray) {
  // for loop thru array, sum value of price attribute for each object//
  var total = 0;
  
  for(var i=0; i<cartArray.length; i++){
   if(cartArray[i].price){
    total = total + cartArray[i].price;
  }
}
  //outside of for loop so you don't see it every single time
  //TODO: print total as HTML to page next to cart icon
  console.log(total);
}

////HW: turn objects into strings. Slide 46 for function scarfName
//var cart = [
//  {name: "Fringed Plaid"}, {name: "Reversible Plaid"}, {name: "Ashby Twill"}
//]
//
////For onSubmit portion:
//function scarfName(cart){
//  
//  var i =cart.findIndex(function(el){ return el.name.toLowerCase() == cart });
//}

var cart = [];

function addItem(item) {
  var index = cart.indexOf(item);
  if (index == -1) {
    cart.push(item);
  }
  console.log(cart);
}

function removeItem(item) {
  var index = cart.indexOf(item);
  if (index != -1) {
    cart.splice(index, 1);
  }
  console.log(cart);
}

//TO DO: Create 2 comparison functions to sort by name and price
var cart = []
function comparePrice(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function filterProducts() {
  var sort_type = document.scarfSort.filter.value;
  if (sort_type == "price") {
    console.log("sort by price");
    products.sort(comparePrice);
  }
  else if (sort_type == "name") {
    console.log("sort by name");
    products.sort(compareName);
  }
  console.log(products);
  event.preventDefault();
}

//Shopping Cart Function
