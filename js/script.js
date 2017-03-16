var products = [
  {
    "name": "Reversible",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
    "imageSet": "images/reversible-plaid.jpg 583w, images/reversible-plaid200.jpg 200w",
    "imageSizes": "(max-width: 400px) 200px, (max-width: 800px) 583px",
    
  },
  {
    "name": "Cable",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg",
    "imageSet": "images/wool-cable.jpeg 300w, images/wool-cable150.jpeg",
    "imageSizes": "(max-width: 400px) 150px, (max-width: 800px) 300px"
  },
  {
    "name": "Northern",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg",
    "imageSet": "images/northern-lights.jpg 600w, images/northern-lights.jpg 300jpg",
    "imageSizes": "(max-width: 400px) 300px, (max-width: 800px) 600px"
  },
  {
    "name": "Ombre",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg",
    "imageSet": "images/ombre-infinity.jpg 860w, images/ombre-infinity400.jpg 400w",
    "imageSizes": "(max-width: 400px) 400px, (max-width: 1600px) 860px"
  },
  {
    "name": "Fringed",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg",
    "imageSet": "images/fringed-plaid.jpeg 960w, images/fringed-plaid600.jpeg 600w, images/fringed-plaid200.jpeg 200w",
    "imagesSizes": "(max-width: 400px) 200px, (max-width: 800px) 600px, (max-width: 1600px) 960px"  
  },
  {
    "name": "Multi",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg",
    "imageSet": "images/multi-color.jpeg 3000x, images/multi-color400.jpeg 400w, images/multi-color800.jpeg 800w",
    "imageSizes": "(max-width: 400px) 400px, (max-width: 800) 800px, (max-width: 1600px) 3000px"
  },
  {
    "name": "Etro",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg",
    "imageSet": "images/etro.png 492w, images/etro200.png 200w",
    "imageSizes": "(max-width: 400px) 200px, (max-width: 800px) 492px"
  },
  {
    "name": "Ashby",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg",
    "imageSet": "images/twill.jpg 1024w, images/twill400.jpg 400w, images/twill800.jpg 800w",
    "imageSizes": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1600px) 1024px"
  }
];


//
//
///*
//- Loop through object, output each value to console 
//*/
//for (i = 0; i < products.length; i++) {
//    console.log(products[i].name + ". " + products[i].description + ". " + products[i].price);
//}
//
//function capture () {
//  console.log(document.scarfInfo.filter.value);
//  event.preventDefault();
//}
//
///* Function for sum in cart */
////TODO: trigger on change of cart contents
//function sumPrices(cartArray) {
//  // for loop thru array, sum value of price attribute for each object//
//  var total = 0;
//  
//  for(var i=0; i<cartArray.length; i++){
//   if(cartArray[i].price){
//    total = total + cartArray[i].price;
//  }
//}
//  //outside of for loop so you don't see it every single time
//  //TODO: print total as HTML to page next to cart icon
//  console.log(total);
//}
//
//var cart = [];
//
//function addItem(item) {
//  var index = cart.indexOf(item);
//  if (index == -1) {
//    cart.push(item);
//  }
//  console.log(cart);
//}
//
//function removeItem(item) {
//  var index = cart.indexOf(item);
//  if (index != -1) {
//    cart.splice(index, 1);
//  }
//  console.log(cart);
//}
//
////TO DO: Create 2 comparison functions to sort by name and price
//var cart = []
//function comparePrice(a, b) {
//  if (a.price < b.price) {
//    return -1;
//  }
//  if (a.price > b.price) {
//    return 1;
//  }
//  return 0;
//}
//
//function compareName(a, b) {
//  if (a.name < b.name) {
//    return -1;
//  }
//  if (a.name > b.name) {
//    return 1;
//  }
//  return 0;
//}
//
//function filterProducts() {
//  var sort_type = document.scarfSort.filter.value;
//  if (sort_type == "price") {
//    console.log("sort by price");
//    products.sort(comparePrice);
//  }
//  else if (sort_type == "name") {
//    console.log("sort by name");
//    products.sort(compareName);
//  }
//  console.log(products);
//  event.preventDefault();
//}

//Shopping Cart Function
//cart function
document.getElementById("cart-info").onclick = function () {
  var popup = document.getElementById("my-cart");
  toggleVisibility(popup);
};

function clickEvent(name, price) {
    return function () {
        addProduct(name, price);
    };
}

function populateProducts() {
  var container = document.getElementById("item-container");
  for (var i = 0; i < products.length; i++) {
    var item = document.createElement("div");
    item.className = "item";
    item.innerHTML = "<h4>" + products[i].name + "</h4>";
    item.innerHTML += "<img srcset='" + products[i].imageSrcSet + "' " +
                            "sizes='" + products[i].imageSizes + "' " +
                            "src='" + products[i].imageTitle + "' alt='" + products[i].name + " image'>";
    item.innerHTML += "<p>" + products[i].description + "</p>";
    item.innerHTML += "<p>$" + products[i].price + "</p>";
    var button = document.createElement("button");
    button.className = "hidden";
    button.addEventListener('click', clickEvent(products[i].name, products[i].price));
    button.textContent = "Add to my cart";
    item.appendChild(button);
    container.appendChild(item);
  }
}
populateProducts();

function sortProducts(event) {
  event.preventDefault();
  var container = document.getElementById("item-container");
  var sortBy = document.sortMe.sort.value;
  if(sortBy == "name") {
    sortByName();
    cleanElement(container);
    populateProducts();
  }
  else if(sortBy == "price"){
    sortByPrice();
    cleanElement(container);
    populateProducts();
  }
  
  
}

function sortByName() {
  products.sort(function(a, b) {
    return a.name.toLowerCase() > b.name.toLowerCase();
  });
}

function sortByPrice() {
  products.sort(function(a, b) {
    return a.price - b.price;
  });
}

var cart = [];

function checkName(name) {
  return function(item) {
    return item.name == name;
  };
}

function findProductIndex(name, array) {
  return array.findIndex(checkName(name));
}


function addToCart(name, price) {
  var index = findProductIndex(name, cart);
  if(index != -1) {
    cart[index].qty ++; 
  }
  else {
    cart.push({"name": name,
             "qty": 1,
             "price": price
              });
  }
  
  updatedCart();
}

function removeFromCart(name) {
  var index = findProductIndex(name, cart);
  if(index != -1) {
    var quantity = cart[index].qty;
    if(quantity > 1) {
      cart[index].qty --; 
    }
    else {
      cart.splice(index, 1);
    }
  }
  
  updatedCart();
}

function numberOfItems(array) {
  var items = 0;
  for (var i = 0; i < array.length; i++) {
    items += array[i].qty;
  }
  return items;
}

function removeEvent(name) {
  return function() {
    removeFromCart(name);
  };
}

function updatedCart() {
  var number = document.querySelectorAll(".number-of-items-in-cart");
  /*I know they are exactly 2*/
  var items = numberOfItems(cart);
  number[0].innerHTML = items;
  number[1].innerHTML = items;
  
  var emptyMessage = document.getElementById("emptyMessage");
  var itemsMessage = document.getElementById("itemsMessage");
  
  var cartList = document.getElementById("cart-items-list");
  cleanElement(cartList);
  var total = 0;
  
  if(cart.length > 0) {
    emptyMessage.className = "hidden";
    itemsMessage.className = "";
    
    for (var i = 0; i < cart.length; i ++) {
      var item = document.createElement("li");
      item.className = "item-in-cart";
      item.innerHTML = "<div class='name'>" + cart[i].name + "</div>";
      item.innerHTML += "<div class='qty'>" + cart[i].qty + " x </div>";
      item.innerHTML += "<div class='price'>$" + cart[i].price + "</div>";
      var remove = document.createElement("a");
      remove.textContent = "Remove";
      remove.href = "#";
      remove.addEventListener('click', removeEvent(cart[i].name));
      item.appendChild(remove);

      total += cart[i].price * cart[i].qty;
      cartList.appendChild(item);
    }
  }
  else {
    emptyMessage.className = "";
    itemsMessage.className = "hidden";
  }
  document.getElementById("cart-total").innerHTML = "Total: $" + total.toFixed(2);
  jumpingBadge();
}

function jumpingBadge() {
  var badge = document.getElementById("badge");
  if(cart.length > 0) {
    badge.className = "fa-stack badge";
    badge.className += " bounce";

    var animationEvent = whichAnimationEvent();
    var bool = animationEvent && badge.addEventListener(animationEvent, function() {
      badge.className = "fa-stack badge";
    });
  }
  else {
    badge.className = "hidden";
  }
  
}