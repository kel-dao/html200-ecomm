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

function filterProducts(){   
console.log(document.sortBy.filter.value);
event.preventDefault();
}

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

function filterProducts(){
  var sort_type = document.sortBy.filter.value;
  if (sort_type === "price") {
    console.log("sort by price");
    products.sort(comparePrice);
  } else if (sort_type === "name") {
    console.log("sort by name");
    products.sort(compareName);
  }
  console.log(products);
 event.preventDefault();
}

var cart =[];
    

function addItem(name) {
  var name_is_already_in_cart = false;
  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i]) {
      name_is_already_in_cart = true;
    }
  }
  if (!name_is_already_in_cart) {
      cart.push(name);
  }
  console.log(cart.length);
  console.log(name);
  console.log(cart);
    updatedCart();
}

function removeItem(name) {
  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i]) {
        cart.splice(i,1);
    }
  }
  console.log(cart.length);
  console.log(name);
  console.log(cart);
    updatedCart();
}

function updatedCart() {
    var items = document.getElementById("simpleCart_quantity");
    items.innerHTML = cart.length;
}

function populateProducts() {
    var itemContainer =
        document.getElementById("item-container"); 
     for (var i = 0; i < products.length; i++) {
         var item = document.createElement("div");
         item.className = "item-container";
         var h3 = document.createElement("h3");
         h3.innerHTML = products[i].name;
         item.appendChild(h3);
         var p = document.createElement("p");
         p.innerHTML = products[i].description;
         item.appendChild(p);
         itemContainer.appendChild(item-container);
     }
}

populateProducts();