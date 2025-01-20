// // sert is similar to array 
// let set = new Set();
// // set is unorderred 
// // some methods of sort 
// // set.add() 
// // set.has() 
// // set.size   its a property 
// // set.delete() 
// // set.clear() all clear 
// set.add(10);
// set.add(true);
// set.add(12);
// set.add(13);
// console.log(set);
// console.log(set.has(12));
// console.log(set.size);
// console.log(set.delete(10));
// console.log(set.clear());


/* 
Q1. let arr = [10,12,10,12,4,1,2,4,2] remove the unique elements and give the single non repeated element of array

let arr = [10,12,10,12,4,1,2,4,2]
let set = new Set();
for(let i=0; i<arr.length;i++){
if(set.has(arr[i])) set.delete(arr[i]);
else set.add(arr[i]);
}
console.log(set)
 */


