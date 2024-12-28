/*
let s =prompt("ENter string : ")
print the string  characters on next line
s.split("").forEach(function(value){
  console.log(value);
})
for(let i=0 ;i<s.length;i++){
    console.log(s[i])
}

print the string characters reverse
for(let i=s.length-1 ;i>=0;i--){
    console.log(s[i])
}
print the string  reverse
let str=''
for(let i= s.length-1 ;i>=0;i--){
    str += s[i]
}
console.log(str)

palindrome checkk
first way  bruteforce
let str=''
for(let i= s.length-1 ;i>=0;i--){
    str += s[i]
}
if(str===s) console.log("Palindrome")
else console.log("Not palindrrome")

second way two pointers
for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    {(s[i] !== s[j]) ?  console.log("Not palindrome"): console.log("Palindrome")}  
    
    if (s[i] !== s[j]) {
  console.log("Not palindrome")
        return;
    }
}
    console.log("palindrome")

54. count vowels and consonant

let countVowels = 0, countSpace = 0, countNum = 0, countConsonant = 0;

for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i).toLowerCase(); 
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')                     countVowels++;
    else if (char === ' ')                   countSpace++; 
    else if (char >= '0' && char <= '9')     countNum++;
    else if (char >= 'a' && char <= 'z')     countConsonant++;
}

console.log(  "Vowels: " + countVowels + 
    ", Consonants: " + countConsonant + 
    "\nSpaces: " + countSpace + 
    "\nNumbers: " + countNum);

55 Toggel characters

let ans = ""
 for(let i= 0 ; i<s.length ; i++){
     if(s.charCodeAt(i) >= 65 && s.charCodeAt(i)<=96) ans += String.fromCharCode(s.charCodeAt(i) + 32)
     else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)  ans += String.fromCharCode(s.charCodeAt(i) - 32)
     else ans+=s.charAt(i)
     
 }
 console.log(ans);
*/










