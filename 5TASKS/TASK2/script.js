/*
1

let num = Number(prompt("Enter number  : "))
let fibo=[0,1]
for(let i=2;i<num;i++)  fibo[i] = fibo[i-1] + fibo[i-2]
console.log(fibo)

***************************************************************************

2

let num1 = Number(prompt("Enter number  : "))
let num2 = Number(prompt("Enter number  : "))
let max =Math.max(num1,num2)
while(true){
    if(max%num1===0 && max%num2===0) {console.log("LCM of ",num1 ,"And ",num2, " is" , max);
    break;}
    max++
}

***************************************************************************
3
let num1 = Number(prompt("Enter number  : "))
let num2 = Number(prompt("Enter number  : "))
while(num2!==0){   let remainder =num1 % num2
    num1 = num2
    num2 =remainder
}
console.log("HCF is", num1)

***************************************************************************

4
let num = Number(prompt("Enter number  : "))
 while(num!==1){
     if(num%2==0) num /=2
     else num = (num*3) + 1
     console.log(num)
 }

 ***************************************************************************
 */
