/* 1 ACCEPTING NUMBERS USING PROMPT AND CASTING INTO INTEGER
 let a = prompt("ENTER YOUR FIRST NUMBER")
     let b = prompt("ENTER YOUR SECOND NUMBER")
     let a = Number(prompt("ENTER YOUR FIRST NUMBER"))
     let b = Number(prompt("ENTER YOUR SECOND NUMBER"))
    let a = parseInt(prompt("ENTER YOUR FIRST NUMBER"))
    let b = parseInt(prompt("ENTER YOUR SECOND NUMBER"))
    console.log(`sum of ${a} and ${b} is  ${a+b}`)

 ***************************************************************************************
 2  ACCEPTING NAME AND AGE AND DISPLAYING THE GREET WITH AGE AND NAME 
 let a =prompt("Enter your Name...");
 let b = Number( prompt("Enter your age"))
 console.log("Hello  " +a + "!" + "  You are " + b + " years old") ;

 ***************************************************************************************
 3  <!-- Accept  two numbers and return  which on is greatest -->
 let a =parseFloat(prompt("Enter length "))
        let b =parseFloat(prompt("Enter width "))
        
       if(a > b ){
        console.log("Length is greater than width")

       }
       else{
        console.log("Width is greater than length")
       }

 ***************************************************************************************
 4   ACcept length and width of a rectangle as double . Calculate and print the area and perimeter
  let a =parseFloat(prompt("Enter length "))
        let b =parseFloat(prompt("Enter width "))
        
        let area = a * b
        let perimeter = 2 * (a + b)
         
        console.log("Area: " + area + ", perimeter: " + perimeter)
      
******************************************************************************************
 5 Take a number and display the number is even or odd

  let a =parseFloat(prompt("Enter Number "))
        if(a %2 ===0){
            console.log("Odd")
        }
        else{
            console.log("Even")
        }

 *****************************************************************************************
 6  sum of two numbers 

 var a =5
        var b = 10
        console.log(`Sum of ${a} and ${b} is ${a+b}`)
        console.log("Sum of 5 and 7 is" + (a + b))

 ******************************************************************************************
 7 take name and age and display u are eligible for vote or not if not then display the age in how mnay years u are eligble for vote

  let a =prompt("enter name")
        let b = parseInt(prompt("Enter age"))
if (a >=18){
    alert(`${a} you are eligible for vote`)
}

else{
    confirm(`${a} is not eligible to vote , you are eligble for vote in ${18-b}`)
}


************************************************************************************************
8    Take a number bteween 1-7 and dsiplay the name of day
*****first way
  let day = prompt("enter day number between 1-7");
     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     alert(daysOfWeek[day-1]); // JavaScript array starts from 0, so we subtract 1 to get the correct index.

**** Another way to solve it using switch-case statement
    // switch (day) {
    //     case "1":
    //         alert("Sunday");
    //         break;
    //     case "2":
    //         alert("Monday");
    //         break;
    //     case "3":
    //         alert("Tuesday");
    //         break;
    //     case "4":
    //         alert("Wednesday");
    //         break;
    //     case "5":
    //         alert("Thursday");
    //         break;
    //     case "6":
    //         alert("Friday");
    //         break;
    //     case "7":
    //         alert("Saturday");
    //         break;
    //     default:
    //         alert("Invalid day number");
    //         break;
    // }


************************************************************************************************
9  Accept the lengths of the three sides of a triangle. Calculate the area 
using Heron's formula and print it.

function calculate(a,b,c){
    if (a + b > c && a + c > b && b + c > a) {
        let s = (a+b+c)/2
        let area =Math.sqrt(s* ( s - a ) * ( s - b ) * ( s - c ));
        return area;
    }
    else{
        return "The given sides do not form a valid triangle.";
    }

}
let a = parseFloat(prompt("Enter the first side of the triangle:"));
let b = parseFloat(prompt("Enter the second side of the triangle:"));
let c = parseFloat(prompt("Enter the third side of the triangle:"));
let result = calculate(a,b,c);
console.log(result !== "Invalid triangle sides" ? `The area of the triangle is: ${result}` : result);


************************************************************************************************

10   Accept a year from the user and determine if it is a leap year or not based 
on the leap year conditions.
 If the year is evenly divisible by 4, it is a leap year.
 If the year is evenly divisible by 100, it is not a leap year, unless:
 The year is also evenly divisible by 400, then it is a leap year

 let a = parseInt(prompt("Enter the year"))
if((a % 4 ===0 && a % 100 !==0) || a % 400===0 ){
    console.log( `${a} is leap year`)
}
else{
    console.log(``${a}  is not a leap year`)
}


************************************************************************************************

11  Accept an integer and  Print hello world n times
let a = parseInt(prompt("Enter  the number"))
for (let i =1 ; i<=a ; i++){
console.log("Hello world")
}


************************************************************************************************

12 Write a program to print all natural numbers up to a given limit 'n'.
let a = parseInt(prompt("Enter  the number"))
for (let i =1 ; i<=a ; i++){
console.log(i)
}


************************************************************************************************
13 Write a program to calculate the sum of the first 'n' natural numbers

let a = parseInt(prompt("Enter  the number"))
let sum =0;
for (let i =1 ; i<=a ; i++){
sum+=i;
}
console.log(sum)

************************************************************************************************

14.  Write a program to calculate the factorial of a given number.
let a = parseInt(prompt("Enter  the number"))
let fact =1;
for (let i =1 ; i<=a ; i++){
fact*=i;
}
console.log(fact)

*************************************************************************************************
15.  Write a program to check if a given number is a prime number or not, 
considering the following conditions:
 A prime number is a positive integer greater than 1, which has only two 
positive divisors: 1 and number itself.

let a = parseInt(prompt("Enter  the number"))
let count = 0;
// factore 
if(a==1) console.log("number is not prime")
for(let i = 2; i < a/2 ; i++){
    if(a % i == 0){
        // console.log(`${i} is a factor of ${a}`)
        count++;
    }
}
if(count == 0) console.log(`${a} is a prime number`)
    else console.log(`${a} is not a prime number`)


**************************************************************************************************

16.  Write a program to calculate the sum of the digits of a given number.
let a = parseInt(prompt("Enter  the number"))
let sum =0;
while(a>0){
    let digit = a % 10;
   sum+=digit;
a = Math.floor(a / 10);
}
console.log(sum)

**************************************************************************************************
17. You are tasked with creating a shop discount program that calculates
 discounts based on the total price of items purchased by a customer. 
0 >= totalPrice <= 5000               -   0% discount
 5000 > totalPrice <= 7000      -   5% discount
 7000 > totalPrice <= 9000      -   10% discount
 9000>totalPrice                               -   20% discount

 let totalPrice = parseInt(prompt("Enter the total price of the product"))
let discount =0;
if(totalPrice >= 0 && totalPrice <= 5000) {
 discount =0
}else if(totalPrice <5000 && totalPrice<=7000){
   discount=5
}
else if(totalPrice <7000 && totalPrice<=9000){
    discount=10
}
else{
    discount =20
}

   let finalPrice = totalPrice - ((totalPrice *discount) /100)
   console.log(`The final price after discount is ${finalPrice}`)

**************************************************************************************************
18 .A utility company needs a program to calculate electricity bills. 
Accept the number of units consumed from the user and calculate the      
bill amount based on the following criteria:
 For the first 100 units, the rate is rupees 4.2 per unit.
 For the next 100 units, the rate is rupees 6 per unit.
 For the next 200 units, the rate is rupees 8 per unit.
 For units above 400, the rate is rupees 13 per unit 

let unit = parseInt(prompt("Enter the total unit"))
let amount =0;
if(unit>400)
  {
    amount = (unit - 400)*13
    unit = 400;
  }
  if(unit >200 && unit <=400){
    amount += (unit - 200)*8
    unit = 200;
  }
  if(unit>100 && unit <=200){
    amount += (unit - 100)*6
    unit = 100;
  }
  if(unit <=100){
    amount += unit*4.2
  }
  
   console.log(`The final price  is ${amount}`)


**************************************************************************************************

19 Write a program to accept a number and print its reverse. Input will not 
contain trailing zero.
let a = parseInt(prompt("Enter  the number"))
let reverse =0;
while( a > 0 ){
    let digit = a % 10;
   reverse = reverse * 10 + digit;
a = Math.floor(a / 10);
}
console.log(reverse);

**************************************************************************************************
 20 .Write a program to accept a number and determine if it is a palindromic 
number. A palindromic number is a number that remains the same when 
its digits are reversed.
let a = parseInt(prompt("Enter  the number"))
let b =a ;
let reverse = 0;
while( a > 0 ){
    let digit = a % 10;
   reverse = reverse * 10 + digit;
a = Math.floor(a / 10);
}
if(b === reverse){
console.log(`${b} is palindrome `)
}
else{
console.log(`${b} is not a palindrome`)
}


**************************************************************************************************
21. Write a program to accept a number and determine if it is a strong 
number or not. A strong number is a number whose sum of the factorial 
of each digit equals the number itself.
 Example 1 : 
Input:
 Output:
 n = 145
 145 is a strong number
 Explanation:
 Sum of factorials = 1! + 4! + 5! = 1 + 24 + 120 = 145
 Since the sum of factorials equals the number itself, 
145 is a strong number.


let a = parseInt(prompt("Enter a number to check if it is a strong number:"));
let b = a; // Store the original number
let sum = 0;

while (a > 0) {
    let digit = a % 10; // Extract the last digit
    let factorial = 1;

    // Calculate factorial of the digit
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
        console.log(factorial)
    }

    sum += factorial; // Add the factorial to the sum
    a = Math.floor(a / 10); // Remove the last digit
}

if (sum === b)   console.log(`${b} is a strong number`);
 else   console.log(`${b} is not a strong number`);


**************************************************************************************************

22. Write a program to determine if a given number is an automorphic number. 
An automorphic number is a number whose square ends with the same 
digits as the number itself.

let n =Number(prompt("Enter number"))
let sq =n*n , copy = n , count = 0;

while(sq > 0){
    count++;
   n =Math.floor(n/10);
}
// Check if the square ends with the original number
let lastDigits = sq % Math.pow(10, count); // Extract last 'count' digits of the square
console.log(lastDigits === n ? 'Automorphic' : 'Not Automorphic');


 *************************************************************************************************************

23. Sum of Digits until the number becomes single digit.
Example 1 : 
Input:
 Output:
 6758
 8
 Explanation: 6 + 7 + 5 + 8 = 26  ||  2 + 6 = 8

// by me
let a = parseInt(prompt("Enter number"))
let sum = 0;
let result =0 ;
while(a>0){
    sum+= a%10
    a= Math.floor(a/10)
}
while(sum>0){
    result += sum%10
    sum = Math.floor(sum/10)
}
console.log(result)

// bhaiya ka concept
let a = parseInt(prompt("Enter number"))
let sum = 0;
while(a>0 || sum>9){
    if(a===0){
        a =sum ;
        sum = 0;
    }
    let rem = a % 10
    sum += rem;
    a = Math.floor(a/10)
}
console.log(sum)

***************************************************************************************************************************************
24 Write a program to generate the Fibonacci series up to a given limit 'n'. The 
Fibonacci series is a sequence of numbers where each number is the sum 
of the two preceding ones, starting from 0 and 1.
 Example 1 : 
Example 1 : 
Input:
 Input:
 Output:
 Output:
 n = 8
 0 1 1 2 3 5 8 13 
Explanation:
 The Fibonacci series starts with 0 and 1.
 Each subsequent number in the series is the sum of the 
two preceding numbers.
 For example, the first few numbers in the Fibonacci 
series are 0, 1, 1, 2, 3, 5, 8, 13, ...

let a =0,b =1
let n = Number(prompt("Enter number to generate"));
while(n>0){
    console.log(a)
    let c = a+ b;
    a = b;
    b = c;
    n--
}
// ***************************************************************************************************************************************
 25   Write a program that repeatedly prints "Hello" until the user provides 
incorrect input using a do-while loop.
 Example 1:
 Flow:
 Hello
 Press 1 to repeat
 1
 Hello 
Press 1 to repeat
 0
 Program Exits 

let n =1;
do{
   alert("HELLO WORLD");
   n =Number(prompt("Press 0 to exit \n and Press any number to continue"))
}while(n !==0);


 //**************************************************************************************************************************************

 26 Write a program to create a choice-based calculator using a do-while 
loop. The program should repeatedly prompt the user to choose an 
operation and perform the corresponding calculation until the user 
chooses to exit.
 Example 1:
 Flow:
 Choose an operation:
 Addition
 Subtraction 
Multiplication
 Division
 Exit
 Enter your choice: 1 (user input)
 Enter the first number: 10
 Enter the second number: 5
 Sum = 15 (output)
//   by me
  let choice = '';
do {
   choice = prompt("Choose an operation:\n additon  : 1\nSubtraction : 2\nMultiplication : 3\nDivision :4\nExit : 0");
   let num1 =0
   let num2 =0
   switch (choice.toLowerCase()) {
       case '1':
            num1 = parseFloat(prompt("Enter the first number:"));
            num2 = parseFloat(prompt("Enter the second number:"));
           alert(`Sum = ${num1 + num2}`);
           break;
       case'2':
           num1 = parseFloat(prompt("Enter the first number:"));
           num2 = parseFloat(prompt("Enter the second number:"));
           alert(`Difference = ${num1 - num2}`);
           break;
       case'3':
           num1 = parseFloat(prompt("Enter the first number:"));
           num2 = parseFloat(prompt("Enter the second number:"));
           alert(`Product = ${num1 * num2}`);
           break;
       case '4':
           num1 = parseFloat(prompt("Enter the first number:"));
           num2 = parseFloat(prompt("Enter the second number:"));
           if (num2 === 0) {
               alert("Error: Division by zero is not allowed.");
           } else {
              alert(`Quotient = ${num1 / num2}`);
           }
           break;
       case '0':
           console.log("Program exited.");
           break;
       default:
           console.log("Invalid choice. Please choose from the given options.");
           break;
   }
   }while(choice != '0');

    //**************************************************************************************************************************************

    27  Write a program that generates a random number “target” in the range of 
1-100 and asks the user to guess what the number is. 
If user's guess is equal to target, print “Congrats”.
 if user’s guess is higher than target,  print  "Too high, try again." 
else print "Too low, try again." 
The program should use a loop that repeats until the user correctly 
guesses the random number.
 Example 1:
 Flow:
 Guess the number
 23 (user input)
 Too low, try again
 67 (user input)
 Too high, try again
 40 (user input)
 Congrats. 
Program exits.

let count =0
let a =Math.floor(Math.random()*100)
do{
console.log(a)
let n =Number(prompt("Guess the number"))
if(a ===n){
alert("Congratulations")
break;
}
else if(a > n){
    alert("Too low, you have" + count + " guesses")

}else if(a< n){
    alert("Too high, you have" + count + " guesses")
}
else{
    alert("Try again \n Program exits ")
    break;
}
count++
}while(count<5)


****************************************************************************************************************

28  Accept an integer n and print the following pattern for n. 
Example 1 : 
Input:
 Output:
 n = 5
 * 
* * 
* * * 
* * * * 
* * * * *
 Example 2 : 
Input:
 Output:
 n = 4
 * 
* * 
* * * 
* * * *

let n = 12
// let n = Number(prompt("Enter number"))
for( let i =1 ; i<=n; i++){
    let rows = ""
   for( let j=1  ;j<=i ; j++){
   rows += "* "
   }
   console.log(rows)
}
   *******************************************************************************************

   29  Accept an integer n and print the following pattern for n. 
Example 1 : 
Input:
 Output:
 n = 5
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5

 
let n =5
for(let i=1;i<= n; i++){
    let rows =""
    for(let j=1 ; j<= i ; j++){
        rows+= " "+j
    }
    console.log(rows)
}
    
30 Accept an integer n and print the following pattern for n. 
Example 1 : 
Input:
 Output:
 n = 5
 A 
A B 
A B C 
A B C D 
A B C D E

*/








 

