// TOWR OF HANOI   OR    TOWR OF BHRAMA
// 3 TOWR A,B,C
// let prompt = require("prompt-sync")();
// let n = prompt("Enter the number of disks: ");
// let A = [];
// let B = [];
// let C = [];
// for (let i = n; i >= 1; i--) {
//     A.push(i);
// }
// console.log(A, B, C);

// function towerOfHanoi(n, source, auxiliary, destination) {
//     if (n === 1) {
//         console.log(`Move disk 1 from ${source} to ${destination}`);
//         destination.push(source.pop());
//         console.log(A, B, C);
//     } else {
//         towerOfHanoi(n - 1, source, destination, auxiliary);
//         console.log(`Move disk ${n} from ${source} to ${destination}`);
//         destination.push(source.pop());
//         console.log(A, B, C);
//         towerOfHanoi(n - 1, auxiliary, source, destination);
//     }
// }
// towerOfHanoi(n, A, B, C);




/*
//****************************************************************    
Josephous Problem 
//****************************************************************
// let prompt = require("prompt-sync")();
// let n = prompt("Enter the number of people: ");
// let k = prompt("Enter the number of people to skip: ");
// let people = [];
// for (let i = 1; i <= n; i++) {
//     people.push(i);
// }
// console.log(people);
// let i = 0;
// while (people.length > 1) {
//     i = (i + k - 1) % people.length;
//     people.splice(i, 1);
//     console.log(people);
// }
// console.log(`The person who survives is ${people[0]}`);


//****************************************************************

 */

let prompt = require("prompt-sync")();
let n = prompt("Enter the number of people: ");
let k = prompt("Enter the number of people to skip: ");
let people = [];
for (let i = 1; i <= n; i++) {
    people.push(i);
}
console.log(people);
let i = 0;
while (people.length > 1) {
    i = (i + k - 1) % people.length;
    people.splice(i, 1);
    console.log(people);
}
console.log(`The person who survives is ${people[0]}`);

