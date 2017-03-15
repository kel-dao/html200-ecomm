////Adding and Removing in Arrays
////https://www.w3schools.com/js/js_array_methods.asp
//
//var arr = [1, 2, 3, 4, 5]
//
//arr.push[90]
//5
////Returns with new length of array
//
//arr.pop()
//90
////pop returns the last element in the array
//
//arr.shift()
//4
////makes length shorter
//
//arr.unshift()
//4
////Returns length of array with new Number
// 
////forEach functions
//arr.forEach(function(el){
//  console.log(el * 2) 
//})
////multiplies each element by 2. 
////for example: var arr = [1, 2, 3]
////arr.forEach(function(el){
////  console.log(el * 2) 
////})
////returns 2, 4, 6
//
//var inty = [8, 20, 12, 7]
//
//function square(el){
//  console.log(el**2);
//}
//
//inty.forEach(square);
//
//inty.indexOf(20)
////returns 1
//
//inty.index(2000)
////returns -1


function updateSpicesCollection (newSpice) {
var spicy = ["clove", "nutmeg", "ancho"]

function toggleSpices(newSpice) {
  var i = spicy.indexOf(newSpice);
  if (i == -1) {
    spicy.push(newSpice);
  } else {
    spice.splice(i, 1);
  }
  console.log(spicy);
}
  
var people = [{age: 12, name: "richard"}, {age: 19, name: "Elvis"}, {age:4, name: "Jaime"}]

function sortByAge (a,b){
  console.log("a", a);
  console.log("b", b);
  return 0;
}
  
people.sort(sortByAge);