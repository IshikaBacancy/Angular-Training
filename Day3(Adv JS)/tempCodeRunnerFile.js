const nums = [1,2,3,4,5];  // here a,b,c are the values not the indexes

let [g,h,f] = nums;
// console.log(g);
// console.log(h);
// console.log(f);

const[d,e,...rest] = nums; 
console.log(rest); // rest is an array of all the values in nums array
