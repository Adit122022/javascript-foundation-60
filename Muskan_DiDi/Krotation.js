/* 
 // Reverse WIthout using extra space (two pointer algorithm) 
let arr = [1,2,3,4,5]
let i =0; 
let j =arr.length - 1;
while(i < j){
    [arr[i] , arr[j]] = [arr[j],arr[i]]
    i++;
    j--;
}
console.log(arr)


// Linear Search          --> time complexity O(n)
let arr = [1,2,3,4,5,6,7,8,9,10]
let key = 5;
let flag = false;
for(let i =0; i<arr.length; i++){
    if(arr[i] === key){
        console.log("Element found at index " +i);
        flag = true;
        break;
    }
}
if(!flag){
    console.log("Element not found");
}

// Binary Search    --->  (always work on sorted array ) time complexity O(logn)

let arr = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(arr, key){
    let i = 0;
    let j = arr.length - 1;
    while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(arr[mid] === key)     return mid;
        else if(arr[mid] < key)  i = mid + 1;
        else    j = mid - 1;
    }
}

let key = 5;
let index = binarySearch(arr,key);
console.log(index);

// Bubble Search ---> (always work on sorted array ) time complexity o(n^2)

let arr = [5, 8, 6, 88, 7, 42, 5, 4, 3];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

bubbleSort(arr);
console.log(arr);
*/


