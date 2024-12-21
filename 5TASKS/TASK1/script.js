/*
1 
first way 
 let name =prompt("Enter your name")
let age =prompt("Enter your age")
let FvColor =prompt("Enter your Favorite color")
let city =prompt("Enter your City")
alert(`Hello ${name} ! You are ${age} years old,  your Favorite color is ${FvColor} , and you live in ${city}`)

second way
let [name, age, FvColor, city] = [prompt("Enter your name"), prompt("Enter your age"), prompt("Enter your Favorite color"), prompt("Enter your City")];
alert(`Hello ${name}! You are ${age} years old, your favorite color is ${FvColor}, and you live in ${city}.`);

2 
first way
let input = prompt("Enter number of minutes")
let hours =Math.floor(input / 60)
let minutes = input % 60
console.log(`Total hours: ${hours} and ${minutes} minutes`)

sceond way 
let input = prompt("Enter number of minutes");
console.log(`Total hours: ${Math.floor(input / 60)} and ${input % 60} minutes`);

3 .
first way
let score =Number(prompt("Enter the score of the student"))
if((score>90) && (score<=100)) console.log("you  got A grade")
    else if((score>=75) && (score<=90)) console.log("you  got B grade")
    else if((score>=60) && (score<=75)) console.log("you  got C grade")
    else if((score>=50) && (score<=60)) console.log("you  got D grade")
    else if((score>=35) && (score<=50)) console.log("you  got E grade")
    else console.log("you  got F grade")


    second way
let score = Number(prompt("Enter the score of the student"));
let grade = score > 90 ? "A" :
            score >= 75 ? "B" :
            score >= 60 ? "C" :
            score >= 50 ? "D" :
            score >= 35 ? "E" : "F";
console.log(`You got ${grade} grade`);


4
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let operation = prompt("Enter the operation (+, -, *, /)");

let result = operation === "+" ? a + b :
            operation === "-" ? a - b :
            operation === "*" ? a * b :
            operation === "/" ? a / b :
            "Invalid operation";

console.log(`Result: ${result}`);

5
let n= Number(prompt("Enter the number"));
let result =[]
for(let i=1;i<=n;i++){
    if((i%5===0)&&(i%3===0)) result.push("FIzzBuzz")
        else if(i%3===0) result.push("Fizz")
        else if(i%5===0) result.push("Buzz")
    else result.push(i.toString())

}
console.log(result)

*/ 





