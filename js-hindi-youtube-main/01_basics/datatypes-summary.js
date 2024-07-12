//  Primitive (Call By Value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive) (Call By Reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++
// Primitive Data types works in stack (Make changes in the copied value and returns that )
// Whereas Non Primitve enters heap (Make changes in the original reference value and returns the reference only)
let myYoutubeName = "DivyanshBansalDotCom";
let anotherName = myYoutubeName;
anotherName = "ChaiAurCode";
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  Email: "divyanshbansal56@gmail.com",
  Upi: "divyanshbansal310@okicici",
};

let userTwo = userOne;

userTwo.Email = "eveningwalrus";
console.log(userOne);
console.log(userTwo);
