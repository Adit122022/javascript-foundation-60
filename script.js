// foundation 60
// 1.  Print Hello World !!
// ans 1 . console.log("Hello World !!");

// 2. Write a  program that prints the perimeter of 
// a rectangle to take its height and width as 
// input .
//  ans 2  
// let a = prompt("Enter the height of the rectangle");
// let b = prompt("Enter the width of the rectangle");
// console.log(2*(a+b));

// 3. Write a  program to compute the perimeter 
// and area of a circle with a given radius .
// ans 3 
// let r = prompt("Enter the radius of the circle");
// console.log(2*3.14*r);
// console.log(3.14*r*r);

// 4.Write a  program to find the Area of Triangle 
// given Base and Height .
// ans 4
// let base = prompt("Enter the base of the triangle");
// let height = prompt("Enter the height of the triangle");
// console.log(0.5*base*height);

// 5.Write a program that converts temperatures 
// from Celsius to Fahrenheit .
// ans 5.
// let celcius = prompt("Enter the temperature in celcius");
// console.log((celcius*9/5)+32);

// 6 Write a  program that converts kilometers per 
// hour to miles per hour .
// ans 6
// let km = prompt("Enter the distance in kilometers");
// console.log(km*0.621371);

// 7
//  a) Write a  program that takes hours and 
// minutes as input, and calculates the total 
// number of minutes .
// ans 7 a)
// let hours = parseInt(prompt("Enter the hours"));
// let minutes = parseInt(prompt("Enter the minutes"));
// console.log(hours * 60 + minutes);
// second way to this 
// let hours = prompt("Enter the hours");
// let minutes = prompt("Enter the minutes");
// console.log((+hours*60)+ + minutes);
//  7 b) Write a program  that takes minutes as 
//  input, and display the total number of hours a 
//  minutes .
// ans 7 b.)
// ... existing code ...

// ans 7 b.)
// let minutes = parseInt(prompt("Enter the minutes"));
// let hours = Math.floor(minutes / 60);
// let remainingMinutes = minutes % 60;
// console.log(`${minutes} minutes = ${hours} hours and ${remainingMinutes} minutes`);


// 8 . Design a program that calculates the simple 
// interest based on user-provided principal, 
// rate, and time .

// ans 8
// let principal = parseInt(prompt("Enter the Principle "));
// let rate = parseInt(prompt("Enter the RATE "));
// let time = parseInt(prompt("Enter the TIME "));
// console.log(`Simple interest = ${(principal*rate*time)/100}`);

// 9 .
// a) Accept two numbers from user and swap 
// their values .
//  b) Accept two numbers from user and swap 
//  their values without using third variable .

// 9 b)
// let a = Number(prompt("Enter the first value"));
// let b = Number(prompt("Enter the second value"));
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);
// 9 b)
// let a = Number(prompt("Enter the first value"));
// let b = Number(prompt("Enter the second value"));
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// 10. Write a  program to calculate a bike’s 
// average consumption from the given total 
// distance (integer value) travelled (in km) and 
// spent fuel (in litters, float number – 2 decimal 
// points) .
// ans 10
// let d= prompt("Enter the distance travelled");
// let fuel= prompt("Enter the spent fules in litters");
// console.log(` Bike's average consumption : ${d / fuel}`)

// 11. Write a  program to accept two integers and 
// check whether they are equal or not .

// ans 11.
// let a = prompt("Enter the first integer");
// let b = prompt("Enter the second integer");
// if (a == b) {
//     console.log("Both integers are equal");
// } else {
//     console.log("Both integers are not equal");
// }

// 12.Write a  program to find whether a given year 
// is a leap year or not .
// ans 12.
// let year = prompt("Enter the year");
// if (year % 4 == 0) {
//     console.log("Leap year");
// } else {
//     console.log("Not a leap year");
// }

// 13.Write a program to find the largest among 
// three numbers .
// ans 13.
// let a = prompt("Enter the first number");
// let b = prompt("Enter the second number");
// let c = prompt("Enter the third number");
// if (a > b && a > c) {
//     console.log(`${a} is the largest number`);
// }
// else if (b > a && b > c) {
//     console.log(`${b} is the largest number`);
// }
// else {
//     console.log(`${c} is the largest number`);
// }

// 14.Write a  program to check whether a given 
// integer is positive or negative and also check 
// whether the given integer is even or odd .
// ans 14
// let a = prompt("Enter the number");
// if (a > 0) {
//     console.log("Positive number");
// } else {
//     console.log("Negative number");
// }   
// if (a % 2 == 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// 15. Write a program to read the age of a 
// candidate and determine whether it is 
// eligible for casting his/her own vote .
// ans 15
// let age = prompt("Enter the age of the candidate");
// if (age>18){
//     console.log("Eligible for Casting his /her own votes")
// }
// else{
//     console.log("Not eligible for Casting his /her own votes")
// }

// 16.Write a program to read the age of a 
// candidate and determine whether it is 
// eligible for casting his/her own vote .

// let maths = prompt("Enter the marks of maths");
// let science = prompt("Enter the marks of science");
// let english = prompt("Enter the marks of english");
// let sst = prompt("Enter the marks of Soical Science");
// marks = maths + science + english;
// percentage = marks / 4;
// console.log(`Total marks = ${(+maths) +(+science)+(+english)}`);
// if (percentage>=75){
//     console.log("Grade A");
// }
// else if (percentage<=75){
//     console.log("Grade B");
// }
// else if (percentage<=55){
//     console.log("Grade C");
// }
// else if (percentage<=45){
//     console.log("Grade D");
// }
// else if (percentage<=35){
//     console.log("Grade E");
// }
// else{
//     console.log("Enter your marks again while refreshing the site");
// }

// 17.Write a program to input cost price and 
// selling price of a product and check profit or 
// loss .

// let cost_price = prompt("Enter the cost price of the product");
// let selling_price = prompt("Enter the selling price of the product");
// if (selling_price > cost_price)
//     {
//         let profit = selling_price - cost_price;
//         console.log(`Profits = ${profit}`);
//     } else if (selling_price < cost_price) {
//         let loss = cost_price - selling_price;
//         console.log(`LOSS = ${loss}`);
//     } else {
//         console.log("no profit no loss");
//     }

// 18. Write a program to check whether an 
// alphabet is a vowel or a consonant .
// let a = prompt("Enter the alphabet");
// if (a=="a"||a=="e"||a=="i"||a=="o"||a=="u"||a=="A"||a=="E"||a=="I"||a=="O"||a=="U"){
//     console.log("Vowel");
// }
// else{
//     console.log("Consonant");
// }

// 19  Write a program to read any day number in 
// integer and display the day name in word 
// format .
// let day = prompt("Enter the day number");
// switch (day){
//     case "1":
//       console.log("Sunday")
//       break;
//     case "2":
//       console.log("Monday")
//       break;
//     case "3":
//       console.log("Tuesday")
//       break;
//     case "4":
//       console.log("Wednesday")
//       break;
//     case "5":
//       console.log("Thursday")
//       break;
//     case "6":
//       console.log("Friday")
//       break;
//     case "7":
//       console.log("Saturday")
//       break;
//     default:
//       console.log("Enter the valid day number");
// }

// 20. Write a program for reading any Month 
// Number and displaying the Month name as a 
// word .
// let month =prompt("Enter the month number");
// switch (month){
//     case "1":
//         console.log("January");
//         break;
//     case "2":
//         console.log("Febuary");
//         break;
//     case "3":
//         console.log("March");
//         break;
//     case "4":
//         console.log("April");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("June");
//         break;
//     case "7":
//         console.log("July");
//         break;
//     case "8":
//         console.log("August");
//         break;
//     case "9":
//         console.log("September");
//         break;
//     case "10":
//         console.log("October");
//         break;
//     case "11":
//         console.log("November");
//         break;
//     case "12":
//         console.log("December");
//         break;
//     default:
//         console.log("Enter the valid month number");
// }

// 21.Write a program to accept the height of a 
// person in centimeter and categorize the 
// person according to their height if below 150 
// he is dwarf if above 150 and below 200 
// average and above 200 tall .
// let height = prompt("Enter your Heights in centimeter");
// if(height<150){
//     console.log("Banuna bsdka🥲");
// }
// else if(height>150 && height<200){
//     console.log("Average");
// }
// else{
//     console.log("Lambe mc😒");
// }

// 22.Build a Calculator which perform these 
// operations (+ , - , / , x , %) .
// let num1 = parseFloat(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, /, *, %):");
// let num2 = parseFloat(prompt("Enter second number:"));

// let result;

// switch(operator) {
//     case "+":
//         result = num1 + num2;
//         console.log(`${num1} + ${num2} = ${result}`);
//         break;
//     case "-":
//         result = num1 - num2;
//         console.log(`${num1} - ${num2} = ${result}`);
//         break;
//     case "/":
//         if(num2 === 0) {
//             console.log("Cannot divide by zero!");
//         } else {
//             result = num1 / num2;
//             console.log(`${num1} / ${num2} = ${result}`);
//         }
//         break;
//     case "*":
//         result = num1 * num2;
//         console.log(`${num1} * ${num2} = ${result}`);
//         break;
//     case "%":
//         result = num1 % num2;
//         console.log(`${num1} % ${num2} = ${result}`);
//         break;
//     default:
//         console.log("Invalid operator!");
// }


// 23. Write a program to print natural numbers up 
// to n .
// let n = prompt("Enter the number");
// for( let i=1; i<=n; i++){
//     console.log(i);
// }
// 24.Write a program to print the factorial of a 
// number .
// let a = prompt("Enter the number");
// let fact = 1;
// for(let i=1; i<=a; i++){
//     fact = fact * i;
// }
// console.log(fact);

// 25. Write a program to  find the sum and average 
// up to nth term .
// let n = prompt("Enter the number");
// let sum = 0;
// for(let i=1; i<=n; i++){
//     sum = sum + i;
// }
// console.log(sum);
// console.log(sum/n);


// 26. Write a program to print the sum of all factors 
// of a number .
// 


