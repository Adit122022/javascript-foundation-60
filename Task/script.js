// if-else: 
// 1. movie rating

// let a = Number(prompt("Enter Rating (0.0 to 5.0)..."));

// if (a >= 4.6 && a <= 5.0) {
//     alert("Super HIT");
// } else if (a >= 3.5 && a <= 4.5) {
//     alert("HIT");
// } else if (a >= 2.1 && a <= 3.4) {
//     alert("Semi-HIT");
// } else if (a >= 0.0 && a <= 2.0) {
//     alert("FLOP");
// } else {
//     alert("Invalid rating. Please enter a number between 0.0 and 5.0.");
// }

// ******************************************************************************************************
// 2. profile based program

// loop: 
// 3. ISBN number
// let n= 1259060977
// let copy=n;
// let count=0;

// while(n>0){
//     count++
//     n=Math.floor(n/10)
// }
// let sum =0
// if(count ==10 || count==13){
//     for(let i=1 ; i<=count; i++){
//         let rem = copy%10
//         sum =sum + (rem*i)
//         copy=Math.floor(copy/10)
//     }
  
//     if(sum % 11==0){
//         console.log("liggial -------------------")
//     }
//     else{
//         console.log("illigal ***************") 
//     }
// }
// ***********************************************************************************

// 4. HCF/GCD
// let a =48
// let b =72
// while(a!=b){
//     if(a>b) a = a-b;
//     else b = b-a;
// }
// console.log(a)

// *******************************************************************************

// 5. Harshad number
// 6. perfect square
// 7. Abundant number
// 8. Fibonaaci series by loop
// let n=Number(prompt("Number"))
// let fibo =[1,2];
// for(let i=2;i<n;i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }
// console.log(fibo)

// 9. Find Number of integers which has exactly x divisors using java

// ******************************************************************************** 
// 10.Program for Finding out the Prime Factors of a number in Java
// let fact=[]
// let num=56;
// let divisor =  2
// while(num>1){
//   if(num%divisor === 0){
//     fact.push(divisor)
//     num/=divisor
//   }
//   else divisor++
// }
// console.log( fact)

// *******************************************************************************
// 11.Write a program to calculate the area of a
//  circle, rectangle, and triangle using a switch statement.

// 12.A neon number is a number where the sum of digits of the square of the number is equal to the number. 
//    Input  : 9
// Output : Given number  9 is Neon number

// Explanation : square of 9=9*9=81;
//               sum of digit of square : 
//               8+1=9(which is equal to given number)

// 13.For a given positive integer N, the purpose is to find the
//  value of F2 + F4 + F6 +………+ F2n till N number.
//  Where Fi indicates the i’th Fibonacci number.
//    Input: n = 4
// Output: 33
// N = 4, So here the fibonacci series will be produced from 0th term till 8th term:
// 0, 1, 1, 2, 3, 5, 8, 13, 21
// Sum of numbers at even indexes = 0 + 1 + 3 + 8 + 21 = 33.

// Input: n = 7
// Output: 609
// 0 + 1 + 3 + 8 + 21 + 55 + 144 + 377 = 609.
// let fibo =[1,2]
// let sum=0;
// let n= Number(prompt("Enter number"))
// for (let i = 2; i <n*2;i++){
//     fibo[i] =fibo[i-1] + fibo[i-2] 
// }
// for(let j=0 ;j<fibo.length;j++)
// {
//     if((j+1)%2 !==0){
//       sum += fibo[j]  
//     }
// }
// console.log(`Fibonacci sequence: ${fibo}`);
// console.log(`Sum of numbers at odd positions: ${sum}`);
 
// let n=Number(prompt("Enter number"))

// let arr = [5,8,10,12,16,17,35,40,55,75]
// function BinorySearch(arr,se){
//     while(start<=end){
// let mid =Math.floor((start+end)/2)
// if(arr[mid]==se) return mid
// else if(arr[mid]> se) end =mid-1
// else start = mid +1
//     }
//     return -1
// }

// let se =40
// let index =BinorySearch(arr,se)
// if(index == -1) console.log("NOT FOUND")
//     else console.log("FOUND AT", index )

let a =48
let b =72
while(a!=b){
    if(a>b) a = a-b;
    else b = b-a;
}
console.log(a)



