//Concepts covered
// Hoisting
// CLosures
// Event loops
// arrays and object structuring destructuring
// prototyping
// class
// inheritance


//Closures
// example of Closure In a closure inner function can still access variables of outer function though outer function has been executed and completed.
// function outerFunction() {
//     let outerVariable = "I'm from outerFunction";
  
//     function innerFunction() {
//       console.log(outerVariable); //This is a closure
//     }
  
//     return innerFunction;
//   }
  
  // const myClosure = outerFunction(); // outerFunction has finished
  // myClosure(); // Still logs: "I'm from outerFunction"

//Hoisting : only declarations goes above no initialization
// console.log(car);  // for var only declaration will go for hoisting so only var car will go above so will give undefined as output
// var car = "bmw";

// error            for let same only declaration above but gives error means we can do hoisting but throws error
// console.log(car2);
// let car2 = "bmw";

// error           for const it is same as let just the declaration and initialization should be done at same time
// console.log(car3);
// const car3 = "bmw";

// getCar();
//function declaration will consider getCar as declaration only so no error in regular function
// function getCar(){ 
//     console.log("bmw");
// }

// error coz consider only declaration so var car no initialization so error
// car();
// var car = function Car() {
//   console.log("bmw");
// }


// event loop 
// for (let index = 0; index < 5; index++) {
//   setTimeout(()=>{
//       console.log(index);
//   },1000);    
// }
  
// for (var index = 0; index < 5; index++) {
//   setTimeout(()=>{
//       console.log(index);
//   },1000);    
// }

// Creation of class
// class Cars {
//   constructor(name){
//       this.name = name;
//   }
// }
// //object creation
// const car5 = new Cars('bmw');
// console.log(car5.name); 

// //Structuring an object
// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Mumbai",
//   place : {
//     country: "India",
//   }
// };

//Destructuring an object basically works as dto if want specific properties to access from object we can use destructuring
// const {name, age} = person;
// console.log(name);
// console.log(age);
// //rename destructuring frm city to location
// const {city: location} = person;
// console.log(location);

// const{address = "Darsh habitat"} = person; // adding new property address but need to give default value
// console.log(address);

// const {city, place:{country}} = person; // nested object property accessing
// console.log(country);

// //structuring and destructuring of array
const nums = [1,2,3,4,5];  // here a,b,c are the values not the indexes

let [g,h,f] = nums;
// console.log(g);
// console.log(h);
// console.log(f);

const[d,e,...rest] = nums; 
console.log(rest); // rest is an array of all the values in nums array

// //swap  in single line
// var c = 1;
// var d = 2;
// [c,d] = [d,c]
// console.log(c);
// console.log(d);

//Prototyping className.prototype == objectname.__proto__ because internally Js maps __proto__ with classname.prototype.
class Person{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log("Hello person");
  }
}

const student = new Person("Ram");
student.greet(); 

class Employee extends Person{
  constructor(name, salary){
    super(name);
    this.salary = salary;
  }
  Details(){
    console.log("The details are");
  }
}

const student1 = new Employee("Shyam", 50000);
student1.greet(); 
student1.Details(); 


//functions with objects as parameters
const users = {
  username: "Ishika",
  password:1234
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
}

// arrays in functions
handleObject(users);

const myarr = [100,200,500]

function returnSecondvalue(getarr){
  return getarr[1]                          //here we are talking about the index
}

console.log(returnSecondvalue(myarr));

//Spread operator for array
const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'mango', 'grape'];

console.log(moreFruits);
// Output: ['apple', 'banana', 'mango', 'grape']

//Spread operator for object
const user = { name: "John", age: 25 };
const updatedUser = { ...user, age: 30, city: "Delhi" };

console.log(updatedUser);
// Output: { name: 'John', age: 30, city: 'Delhi' }

//Rest Operator : collects multiple elements into a single array or object(array)
const colors = ["red", "green", "blue", "yellow", "purple"];

const [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);     // red
console.log(secondColor);    // green
console.log(otherColors);    // ['blue', 'yellow', 'purple']

//rest operator for an object 
const students = {
  name: "Anika",
  age: 20,
  course: "Computer Science",
  grade: "A"
};

const { name, ...restDetails } = student;

console.log(name);         // Anika
console.log(restDetails);  // { age: 20, course: "Computer Science", grade: "A" }




//arrow functions dont use this keyword take this of parent component
//promises very imp
//DNS Domain Name Server
//shortcuts of vs code : ctrl p to find a file in a repo or folder
//debugging
//call, apply , bind this keyword
//&& and || operator use see mdn docs 
//empty array is true 
//pep coding
//dep copy and shallow copy
//async await
//async await is used to handle promises
//css : display and position property(absolute, fixed), pixel units






