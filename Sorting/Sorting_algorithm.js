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
*/
