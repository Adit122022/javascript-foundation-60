# Insertion Sort Algorithm Explanation

## Theory
Insertion sort works by building a sorted array one element at a time. It takes each element from the unsorted portion and inserts it into its correct position in the sorted portion.

## Dry Run of the Code
Let's analyze how the array `[7, 4, 3, 5, 8, 9]` is sorted:

### Initial Array: [7, 4, 3, 5, 8, 9]

#### Pass 1 (i=1):
- key = 4
- Compare 4 with 7
- 7 > 4, so shift 7 to right
- Array becomes: [4, 7, 3, 5, 8, 9]

#### Pass 2 (i=2):
- key = 3
- Compare 3 with 7 (shift 7)
- Compare 3 with 4 (shift 4)
- Array becomes: [3, 4, 7, 5, 8, 9]

#### Pass 3 (i=3):
- key = 5
- Compare 5 with 7 (shift 7)
- Array becomes: [3, 4, 5, 7, 8, 9]

#### Pass 4 (i=4):
- key = 8
- Compare 8 with 7 (no shift needed)
- Array becomes: [3, 4, 5, 7, 8, 9]

#### Pass 5 (i=5):
- key = 9
- Compare 9 with 8 (no shift needed)
- Final array: [3, 4, 5, 7, 8, 9]

## Code Execution Breakdown
```javascript
let arr = [7, 4, 3, 5, 8, 9]
for(let i=1; i<arr.length; i++){    // Iterate through unsorted portion
    let key = arr[i]                // Current element to be inserted
    let j = i-1                     // Last element of sorted portion
    
    while(j>=0 && arr[j] > key){    // Compare with sorted portion
        arr[j+1] = arr[j]           // Shift elements right
        j--;
    }
    arr[j+1] = key                  // Insert key in correct position
}
```

## Time Complexity
- Best Case: O(n) when array is already sorted
- Average Case: O(n²)
- Worst Case: O(n²) when array is reverse sorted

# Selection Sort Algorithm Explanation

## Theory
Selection Sort works by dividing the array into a sorted and an unsorted region. In each iteration, it finds the minimum element from the unsorted region and adds it to the sorted region.

## Dry Run of the Code
Let's analyze how the array `[7, 4, 3, 5, 8, 9]` is sorted:

### Initial Array: [7, 4, 3, 5, 8, 9]

#### Pass 1 (i=0):
- Current element: 7
- Find minimum in remaining array [4, 3, 5, 8, 9]
- Minimum found: 3 at index 2
- Swap 7 and 3
- Array becomes: [3, 4, 7, 5, 8, 9]

#### Pass 2 (i=1):
- Current element: 4
- Find minimum in remaining array [7, 5, 8, 9]
- 4 is already minimum
- No swap needed
- Array remains: [3, 4, 7, 5, 8, 9]

#### Pass 3 (i=2):
- Current element: 7
- Find minimum in remaining array [5, 8, 9]
- Minimum found: 5
- Swap 7 and 5
- Array becomes: [3, 4, 5, 7, 8, 9]

#### Pass 4 (i=3):
- Current element: 7
- Find minimum in remaining array [8, 9]
- 7 is minimum
- No swap needed
- Array remains: [3, 4, 5, 7, 8, 9]

#### Pass 5 (i=4):
- Current element: 8
- Find minimum in remaining array [9]
- 8 is minimum
- No swap needed
- Final array: [3, 4, 5, 7, 8, 9]

## Code Execution Breakdown
```javascript
let arr = [7, 4, 3, 5, 8, 9]
for(let i = 0; i < arr.length-1; i++) {    // Iterate through array
    let minIndex = i;                       // Assume current index has minimum
    for(let j = i+1; j < arr.length; j++) { // Look for smaller element
        if(arr[j] < arr[minIndex])          // If found, update minIndex
            minIndex = j;
    }   
    // Swap current element with minimum found
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
```

## Time Complexity
- Best Case: O(n²)
- Average Case: O(n²)
- Worst Case: O(n²)

## Comparison with Insertion Sort
1. Selection Sort makes fewer swaps compared to Insertion Sort
2. Selection Sort performs the same regardless of input arrangement
3. Insertion Sort performs better when array is partially sorted

# Bubble Sort Algorithm Explanation

## Theory
Bubble Sort repeatedly steps through the array, compares adjacent elements and swaps them if they are in the wrong order. The pass through the array is repeated until no swaps are needed.

## Dry Run of the Code
Let's analyze how the array `[7, 4, 3, 5, 8, 9]` is sorted:

### Initial Array: [7, 4, 3, 5, 8, 9]

#### Pass 1 (i=0):
- Compare 7,4 → swap → [4, 7, 3, 5, 8, 9]
- Compare 7,3 → swap → [4, 3, 7, 5, 8, 9]
- Compare 7,5 → swap → [4, 3, 5, 7, 8, 9]
- Compare 7,8 → no swap
- Compare 8,9 → no swap
- End of pass: [4, 3, 5, 7, 8, 9]

#### Pass 2 (i=1):
- Compare 4,3 → swap → [3, 4, 5, 7, 8, 9]
- Compare 4,5 → no swap
- Compare 5,7 → no swap
- Compare 7,8 → no swap
- Compare 8,9 → no swap

#### Pass 3 (i=2):
- No swaps needed, array is sorted
- Array remains: [3, 4, 5, 7, 8, 9]

## Code Execution Breakdown
```javascript
let arr = [7, 4, 3, 5, 8, 9]
for (let i = 0; i < arr.length-1; i++) {
    for(let j = 0; j < arr.length-1-i; j++) {
        if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}
```

## Time Complexity
- Best Case: O(n) when array is already sorted
- Average Case: O(n²)
- Worst Case: O(n²) when array is reverse sorted

## Comparison with Other Sorts
1. Bubble Sort is the simplest but least efficient
2. Unlike Selection Sort, it makes multiple swaps in each pass
3. Performance is worse than both Insertion and Selection Sort
4. The only advantage is its simplicity and ease of implementation
