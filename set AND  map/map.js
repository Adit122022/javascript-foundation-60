// same as set 
// let map = new Map()
// map.set("aditya",12)   // map.set(key, value)

/*
Q1.u have an array and give the frequency of the number  

let arr= [2,1,2,3,1,1,2,2,3,5,6,7,6] 
let map = new Map()
// in single line  for(let i=0; i<arr.length; i++)map.set(arr[i], (map.get(arr[i] )|| 0)+1)
//  easy multi line 
for(let i=0; i<arr.length; i++){
    if(map.has(arr[i])) map.set(arr[i], map.get(arr[i])+1)
    else map.set(arr[i],1)
}
console.log(map)


Q2. Print the unique elements of an array
let arr= [2,4,2,1,5,4,6,7,6,4,6] 
let map = new Map()
//  frequency 
for(let i=0; i<arr.length; i++)    map.set(arr[i], (map.get(arr[i] )|| 0)+1) 
// printing the unique element method 1
//  for (let [key, value] of map.entries()) if(map.get(value) == 1) console.log(key)
// printing the unique element method 2
// for( a of map.keys()) if(map.get(a)==1) console.log(a)


*/

