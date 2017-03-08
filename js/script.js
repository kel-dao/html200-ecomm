var products = [
  {
    "name": "Reversible",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Cable",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

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