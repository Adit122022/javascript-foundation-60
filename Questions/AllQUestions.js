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
   
********************************************************************************

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

let n = 5 ;
for(let i =1 ; i<=n ; i++){
    let rows =""
    for(let j=0 ; j< i;j++){
        rows += String.fromCharCode(65+ j) + " "
    }
    console.log(rows)
}
 *******************************************************************************************
31  Accept an integer n and print the following pattern for n. 
Example 1 : 
Input:
 Output:
 n = 5
 * * * * * 
* * * * 
* * * 
* *
*

let n =5
for(let i =1; i<=n;i++){
    let rows = ""
    for(let j=1 ; j<= n-i+1 ; j++){
        rows += "* "
    }
    console.log(rows)
}

********************************************************************************************

 Accept an integer n and print the following pattern for n. 
Example 1 : 
Input:
 Output:
 n = 5
        * 
      * * 
    * * * 
  * * * * 
* * * * *
*/
// ---------------------------------------------------------------------------------------------


















// ARRAYS: 
//1. add digits of Array
 /* 
 let a =[]
let size = Number(prompt("Enter a Size   :"))
let sum = 0;
for(let i = 0; i<size; i++){
    a[i] = Number(prompt("Enter number : " + (i+1)))
    sum += a[i]
}
console.log(sum)


************************************************************************************

2. find the largets number in an array

let largest = a[0]
for(let i=1; i< a.length ;i++){
   if(largest < a[i] ){
    largest = a[i]
   }
   else { }
   
}
console.log(largest)



************************************************************************
3. second max number in array

let a = [10, 20, 30, 40,5,65,4,68, 50]

let largest = Math.max(a[0] , a[1])
let min = Math.min(a[0] , a[1])
console.log(largest)
console.log(min)

for(let i=2; i< a.length ;i++){
    if(a[i]>largest){
        min =largest;
        largest = a[i]
    }
    else if(a[i]<min ){
        min = a[i]
    }
}
console.log(largest)
console.log(min)

4. ARRAY SORTED 
let a =[12,4,5,78,15,64];
let b = [...a];
let temp = 0;
for(let i=0; i<a.length;i++){
    if(a[i] > a[i+1]){
       temp =a[i]
       a[i] = a[i+1]
    a[i+1] = temp
    }
}
console.log(b)
console.log(a)

5. Left rotation by 1 in array
let a =[12,4,5,78,15,64];
let b = [...a];
let temp = a[0];
for(let i=0; i<a.length;i++){
    a[i] = a[i+1]  
}
a[a.length-1] = temp
console.log(b)
console.log(a)


6.right rotation by 1 in array
let a =[10,20,30,40,50];
let b = [...a];
let temp =a[a.length-1];
for(let i=a.length-1; i>=0;i--){
    a[i] = a[i-1]  

}
a[0] = temp
console.log(b)
console.log(a)

sceond approac not working 
let a =[10,20,30,40,50];
let b = [...a];
let temp = a[a.length-1];
for(let i=0; i>a.length;i++){
    a[i] = a[i+1]  

}
a[0] = temp
console.log(b)
console.log(a)

7.left rotation by k by user

let a =[12,4,5,78,15,64];
let b = [...a];
let k=16
let count=0
k= k%a.length
console.log(k)

for(let j= 1 ; j<=k ; j++){
    let temp = a[0];
    for(let i=0; i<a.length;i++){
        a[i] = a[i+1]  
       
    }
     count++
    a[a.length-1] = temp
}

console.log(count)
console.log(a)

using block swap algorithm




8.right rotation by k by user

let a =[12,4,5,78,15,64];
let b = [...a];
let k=3
let count=0
k= k%a.length
console.log(k)

for(let j= 1 ; j<=k ; j++){
    let temp = a[a.length-1];
    for(let i=a.length; i<0;i--){
        a[i] = a[i-1]  
       
    }
     count++
    a[0] = temp
}

console.log(count)
console.log(b)
console.log(a)

*********************************************************
 9.reverse array
 let arr=[10,20,30,40,50]
let temp =[]
let i=arr.length-1, j=0
while(i>=0){
    temp[j]= arr[i]
    j++
    i--
}
console.log(arr)
console.log(temp)

in this aprroch  spacComplexity is high

this is one pointer algortihm
let arr=[10,20,30,40,50,60]
let i=0, j=arr.length-1
while(i<j){
  let temp = arr[i]
    arr[i]= arr[j]
    arr[j]=temp
    j--
    i++
   
}
console.log(arr)

10. shift all the negative values to right and positive values to left

let a =[10,12,-5,-3,15,-8,13,-6]

let i=0, j=0
while(i<a.length){
   if(a[i] < 0){
   let  temp = a[i]
     a[i]= a[j]
     a[j]=temp
       j++
   }
  
    i++
}
console.log(a)


*********************************************************************
11 . u have an array of 0 and 1 and shift all the o to left and 1 to right

let a =[0,1,0,0,1,0,1,1,0]

let i=0, j=0
while(i<a.length){
   if(a[i] <= 0){
   let  temp = a[i]
     a[i]= a[j]
     a[j]=temp
       j++
   }
  
    i++
}
console.log(a)


12. take CONSICUTIVE ELEMENTS IN AN ARRAY

let a =[0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,]


let max =0
let count=0
for( let i=0;i<a.length;i++){
 if(a[i] == 1)  count++
 else{
     max =Math.max(max,count)
     count=0
 }
 max =Math.max(max,count)
}

console.log(max)


******************************************************

13. Linear Search for elements in an array

let arr=[10,20,45,15,17,12,18,60]

let key = 15
let key = Number(prompt("Number of elements to search "))
let index=-1
for(let i = 0; i< arr.length;i++){
    if(arr[i]==key){
        index=i
break;
    }
}
if(index==-1) console.log("not Found ");
else console.log("Value found on " ,index+1," postion that is  :",index," index")

**********************************************************************


longest sub array with sum k values
let arr = [1, 4, 20, 3, 10, 5, 15]
let k = 33

let maxLen = 0
let sum = 0

let start = 0

let map = new Map()

for(let end = 0; end < arr.length; end++){
    sum += arr[end]
    if(sum == k){
        maxLen = end - start + 1
        start = end - maxLen + 1
    }
    else if(map.has(sum - k)){
        maxLen = Math.max(maxLen, end - map.get(sum - k))
    }

    else{
        map.set(sum, end)
    }
}


*********************************************************************
largest element in array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let max = arr[0]

for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}

console.log("Largest element in array is : ", max)


second largets element
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let max = Math.max(arr[0],arr[1])
let sMax = Math.min(arr[0],arr[1])
for(let i=1;i<arr.length;i++){
  if(arr[i]>max){
    sMax = max
    max = arr[i]
  }else if(arr[i]>sMax && arr[i]< max){
    sMax =arr[i]
  }
}
console.log(max)
console.log(sMax)

********************************

check if sorted or not  
let arr = [1, 2, 3, 4, 5,12,5, 6, 7, 8, 9, 10,10];
let  isSorted = true;
for(let i=1;i<arr.length;i++){
if(arr[i]>arr[i+1]){ 
isSorted= false;  break;
}
}console.log(` ${isSorted ? " Sorted " : "NOT SORTED"}`)

right shift  element  in array
let arr = [1, 2, 9, 5,10];
let temp =arr[arr.length-1]
for(let i=arr.length-1; i>0;i--){
  arr[i] =arr[i-1]
}
  arr[0] = temp
console.log(arr)






String 
Q 1 REVERSE THE STRING AND PRINT IT CONTINUOUSLY 

let str = prompt("enter your name :")
let rev = ''
for(let i=str.length-1; i>=0 ; i--){
    rev= rev + str.charAt(i)
}
console.log(rev)
******************************************************************************************************

Q 2 PALINDROME OR NOT
 let str = prompt("enter your name :")
let str2 = ''
for(let i=str.length-1; i >=0 ; i--){
    str2= str2+str.charAt(i)
}
if(str === str2) console.log("true")
else console.log("false")


Q 3 check the vovwels and consonent and spacesin the  string 
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

first way
let s = prompt("Enter string");
let countSpace = 0, countNumber = 0, countVowels = 0;

for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A': // Include uppercase vowels if needed
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            countVowels++;
            break;
        case ' ': // Space character
            countSpace++;
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            countNumber++;
            break;
    }
}

console.log(`Vowels: ${countVowels}, Spaces: ${countSpace}, Numbers: ${countNumber}`);

second case  

let s = prompt("Enter string: ");
let countVowels = 0, countSpace = 0, countNum = 0, countConsonant = 0;

for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i).toLowerCase(); // Convert to lowercase to handle uppercase input
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        countVowels++;
    } else if (char === ' ') {
        countSpace++;
    } else if (char >= '0' && char <= '9') { // Check if character is a digit
        countNum++;
    } else if (char >= 'a' && char <= 'z') { // Check if character is a consonant
        countConsonant++;
    }
}

console.log("Vowels: " + countVowels);
console.log("Spaces: " + countSpace);
console.log("Numbers: " + countNum);
console.log("Consonants: " + countConsonant);
  
Thrid case 
let s = prompt("Enter string   :")
let countVowels =0 , countSpace = 0 , countNum = '0', countConsonent =0
for (let i= 0 ; i<s.length; i++){
    let char=s.charAt(i)
    if(char== 'a' || char == 'e' || char =='i'|| char =='o'|| char =='u')  countVowels++
    else if(char == ' ') countSpace++
    else if(s.charCodeAt() >=48 && s.charCodeAt()<=57) countNum++
    else countConsonent++
}
console.log("Vowels  :" + countVowels)
console.log("Spaces  :" + countSpace)
console.log("Number  :" + countNum)
console.log("Consonent  :" + countConsonent)




*/














 

