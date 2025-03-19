/* 
INSERTION SORT
[ 7  ,  4  ,  3  ,  8  ,  9  ]
[ 4  ,  7  ,  3  ,  8  ,  9  ]
[ 4  ,  4  ,  7  ,  8  ,  9  ]
[ 3  ,  4  ,  7  ,  8  ,  9  ]


let arr =[7,4,3,5,8,9]
for(let i=1;i<arr.length;i++){
    let key = arr[i]
    let j = i-1    
    while(j>=0 && arr[j] > key){
        arr[j+1] = arr[j]
        j--;
    }
    arr[j+1] = key
}
console.log(arr)




SELECTION SORT 
                        
  let arr =[7,4,3,5,8,9]
for(let i =0 ; i<arr.length-1; i++){
    let minIndex = i;
 for(let j = i+1; j< arr.length;j++){
    if(arr[j] < arr[minIndex]) minIndex = j
 }   
 [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
console.log(arr);


BUBBLE SORT

let arr =[7,4,3,5,8,9]
for (let i = 0; i<arr.length-1 ;i++)  for(let j= 0 ; j< arr.length-1-i ; j++)  if(arr[j] > arr[j+1]) [arr[j] ,arr[j+1]] = [arr[j+1] ,arr[j]]
 console.log(arr)



 MERGE SORT 

 let arr =[7,4,3,5,8,9]
divide(arr,0,arr.length-1)

function divide(arr,first,last){
    if(first<last){
        let mid = Math.floor((first+last)/2)
        divide(arr,first,mid)
        divide(arr,mid+1,last)
        conquer(arr,first,mid,last)
    }
}

function conquer(arr,first,mid,last){
    let temp = new Array(last-first+1)
    let i = first, j = mid+1, k = 0;
    while(i<=mid && j<=last){  
        if(arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while(i<=mid) temp[k++] = arr[i++]; 
    while(j<=last) temp[k++] = arr[j++];
    for(let i=0; i<temp.length; i++) arr[first+i] = temp[i];
}
console.log(arr)
 */


    
let arr = [7, 4, 3, 5, 8, 9]
