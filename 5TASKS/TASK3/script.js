/*

1

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
 */