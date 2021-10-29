// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

// RIOT WALK

// Input: array
// Output: array
// Use Cases
// min element -> arr[0]
// elements left to min need to be shifted right
//element right of min stay in place
//[4 2  1 3 5] - > [1 4 2 3 5]
//[] -> []
//[1 4 2 3 5]
//[2 2 2 2 2]
//[4 2 3 5 1]
//[1]

// Psuedocode
// Go through each number and find min
// Shift everything left of min to the right
// Put min at arr[0]

function minToFront(arr) {
    var minIndex = 0
    var minElem = arr[minIndex];

    //find the minimum
    for(var index = 1; index<arr.length; index++) {
        if(minElem > arr[index]) {
            minElem = arr[index];
            minIndex = index;
        }
    }

    //shift everything left of min to the right
    for(var index2 = minIndex; index2>0; index2-- ) {
        arr[index2] = arr[index2-1];
    }
    // put min at arr[0]
    arr[0] = minElem;
    return arr;
}

myArr=[4, 2, 1 , 3, 5];
console.log(myArr);
console.log(minToFront(myArr));
