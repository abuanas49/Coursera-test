// var message = "in global";
// console.log("Global: Message = " + message);

// var a = function(){
//   var message = "Inside a";
//   console.log("a: message = " + message);

//   function b () {
//   console.log("b: message = " + message);
// }
//   b();
// }

// a();

// var x;

// console.log(x);


// if (x == undefined) {
//   console.log("X is undefine");
// }

// x = 5;
// if (x == undefined) {
//   console.log("x is Undfined");
// }else{
//   console.log("x Has Defined");
// }

// ***** String Concatination

// var string = "Hello";
// string += " World";
// // string = string + " World";
// console.log(string + "!");

// // *** Regular Math Operators: +, -, /, *
// console.log((5-5) + 2);
// console.log(undefined / 5);

// var a = 7;
// var b = a;

// console.log(b);

// var a = {x: 7};
// var b = a;
// b.x = 5;

// console.log(b);

// var array = ["Muhammad", "Usman", "Hadejia"];
// // console.log("Hello " + array);
// for (var i = 0; i < array.length; i++) {
//   console.log("Hello " + array[i]);
// }

// console.log(array[0]);
// console.log(array[2]);
// console.log(array[1]);

// var a = "John", b = "joe";
var names = ["Abbas", "Dan Izala", "Umar", "Jibril", "Anas","jam"];

for (var i = 0; i < names.length; i++) {
// console.log(names[i]);
  if (names[i].startsWith("J") || names[i].startsWith("j")) {
  console.log("Goodbye " + names[i]);
}else{
  console.log("Hello " + names[i]);
}
}