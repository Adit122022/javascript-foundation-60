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
 */
let arr =[7,4,3,5,8,9]

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr))



