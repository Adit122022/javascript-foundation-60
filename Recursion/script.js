/**
 * Q1 take a number by user and print the n time hello world
 * 
 * let n = Number(prompt("Enter the number : "))
 * function print(n){
 *  if(n == 0) return 
 *  console.log("Hello World")
 * print(n-1) 
 * }
 * print(n)

/*********************************************************************************************
 * 
 * Q2 take a number by user and print the  number from 1 to n 
 * 
 * let n = Number(prompt("Enter the number : "))
function print(n){
    if(n ==0) return 
   print(n-1) 
    console.log(n)
}
print(n)

/*********************************************************************************************
 *
 * Q3 take a number by user and print the sum of all natural numbers from n to 1
 * let n = Number(prompt("Enter the number : "))
function print(n){
    if(n ==0) return 
    console.log(n)
   print(n-1) 
}  
print(n)


 *
 * Q4 take a number by user and print the sum  1 to n
 * let a =Number(prompt("Enter number :"))
function sum(a){
    if(a === 0) return 0;
    return a +sum(a-1);
}
console.log(sum(a))

/*********************************************************************************************
 *
 * Q5 take a number by user and print the factorial of a number
 * let a =Number(prompt("Enter number :"))
function factorial(a){
    if(a === 1 || a === 0) return 1;
    let fact =a * factorial(a-1)
    return fact;
}
console.log(factorial(a))

***************************************************************************************
* Q6 sum of Digits

let a =Number(prompt("Enter number :"))
let sum =0
function sumofDigits(a){
    if(a < 10 ) return a ;

    return (a%10) + Math.floor(sumofDigits(a/10));
}
console.log(sumofDigits(a))

 ******************************************************************************* 
 * Q7 reverse the number of digits
 * let a =Number(prompt("Enter number :"))
function reverse(a ,b = 0){
    if(a === 0 ) return b ;
   b = b*10 +( a%10) ;
    return reverse(Math.floor(a / 10), b)
}
console.log(reverse(a))


*****************************************************************************  date 22-01-2025
* Q8 fibonachinumber 
let a =Number(prompt("Enter number :"))
function fibo(n) {
    if (n==0||n==1) return n;  
  return fibo(n-1)   + fibo(n-2)
}
  console.log(fibo(a)); 
**********************************************************************
Q9 fibonachi series  print
let a =Number(prompt("Enter number :"))
function fibo(n ,a=0,b=1 ) {
    if (n===0) return;  
     console.log(a); 
    fibo(n-1, b, a + b,);  
}
fibo(a); 

Q10 GCD 

Euclidean algorithm
        const gcd =(a,b) =>{
            if(b === 0) return a;
            return gcd(b, a % b)   
        }
        console.log(gcd(20,32));

 ANOTHER WAY TO SOLVE THIS 
        let a = 20, b = 32;
        let c = Math.min(a,b);
        const gcd = (a, b ,c) => {
            if(c === 0) return 1;
            if(a% c ===0 || b % c ===0) return gcd(a , b , c -1)
            }
        console.log(gcd(a,b,c));

Another way to solve this 
        let a = 20, b = 32; 
        const gcd =(a,b){
        if(a==b) return a
        if(a > b) return gcd(a-b,b)
        return gcd(a,b-a)
        }
        console.log(gcd(a,b))


*****************************************************************

Q11   Print the factors of a number 

const n =10;
const factor =(n,i=1)=>{
    if(n%i === 0) console.log(i)
    if(i> Math.floor(n/2)) {
        console.log(n); 
        return }
  factor(n,i+1)
}
factor(n)

// sqrt of n tak chalaya but sorted nahi aa ra hai abhi bhi   
for(let i= 1 ; i<(Math.sqrt(n)) ; i++) {
    if(n % i === 0) {
        if(i==n/i) console.log(n/i);
        else {
        console.log(i, n/i);
    }
    }}
//  sqrt  tak chalaya  and sorted bhi hai 
let n=30;
let i =0;
    for(i=1;i*i<n;i++) if(n%i==0) console.log(i);
    // if((i-n/i) ==1) i--;   // for special case where n is not a perfect square and n is a even 
    for( ; i>=1 ; i-- )     if(n%i==0) console.log(n/i);

************************************************************************************* date 23-01-2025
Q12  
 */

/*
// prime Number
let a =9

let count = 0

if(a==1) console.log("number is not prime")
 for(let i =1; i<=a ;i++)    if(a % i == 0)       count++;  
 if(count == 2) console.warn(`${a} is a prime number`)
    else console.warn(`${a} is not a prime number`)

//   if u want to check the number is prime or not ...? then u need to check the  factor or the number  from 1 to n/2 
let a =2
let count = 0
if(a==1) console.log("number is not prime")
 for(let i =1; i<=a/2 ;i++)    if(a % i == 0)       count++;  
 if(count == 1) console.warn(`${a} is a prime number`)
    else console.warn(`${a} is not a prime number`)

*/ 
// let a = 37;
// const isPrime=() =>{
//     if(a<=1) return false
//     if(a==2) return true
//     if(a % 2 == 0) return false
//  for(let i=3;i<=Math.floor(Math.sqrt(a));i+=2) {
//     if(a % i == 0) return false;
//     return false;
//  }
// }
// console.log(isPrime(a));


//  another way to solve this  -> not completed 
// let count = 0
// if(a==1 || a==2) console.log("number isprime")
// else {
//     for(let i = 3; i<=Math.floor(Math.sqrt(a)) ;i++)    if(a % i != 0) count++;  
//     if(count != 0) console.warn(`${a} is  a prime number`)
//     else console.warn(`${a} is not  a prime number`)
// }

//  another way to solve this using recursion  Sieve of Eratosthenes
// 
// let a =30;
// let arr = new Array(a+1).fill(true);
// for(let i =2; i*i<=a ;i++)  if(arr[i])  for(let j = i*i ; j<=a ; j+=i)   arr[j] = false;
// for(let i =2; i<=a ;i++)    if(arr[i]) console.log(i);



  


