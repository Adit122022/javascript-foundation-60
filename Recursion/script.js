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

 */