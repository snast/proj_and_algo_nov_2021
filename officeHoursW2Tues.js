// Replicate JavaScript's concat(). 
// Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// function arrConcat(arr1, arr2) {
//     var newArr = [];
//     var counter = 0;
//     newArr.length += arr1.length + arr2.length;
//     // for(var counter = 0; counter<arr1.length+arr2.length; counter++ ) {
//     //     if (counter > arr1.length) {
//     //         newArr[counter] = arr2[counter - arr1.length];
//     //     }
//     //     else {
//     //         newArr[counter] = arr1[counter];
//     //     }
//     //     newArr[counter] = 
//     // }
//     for(var index =0; index<arr1.length; index++) {
//         newArr[counter] = arr1[index];
//         counter++;
//     }
//     for(var index2 = 0; index2<arr2.length; index2++) {
//         newArr[counter] = arr2[index2];
//         counter++;
//     }
//     return newArr;
// }
// /*
//     loop through arr1 for i = 0 until arr1.length
//     insert first array contents into next array newArr[i]
//     loop through arr2 for counter = arr1.length until arr1.length + arr2.length 


// */

// testArr1 = [0,1,2,3,4];
// testArr2 = [5,6,7,8,9];
// console.log(arrConcat(testArr1, testArr2));
// testArr3 = ["George", "Phil", "Oliver"];
// testArr4 = ["Jill", "Stacy", "Megan"];
// console.log(arrConcat(testArr3, testArr4));
// console.log(arrConcat([], []));
// console.log(arrConcat([], testArr1));
// console.log(arrConcat(testArr1, []));
// console.log(arrConcat( ['a','b'], [1,2] ))

// [0,1,2,3,4,5,6,7,8,9]

//Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// class SLLNode {
//     constructor(value) {
//         this.val = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }

//     addToFront(val) {
//         var newNode = new SLLNode(val);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     display() {
//         var runner = this.head;
//         while(runner != null) {
//             console.log(runner.val);
//             console.log("->");
//             runner = runner.next;
//         }
//         console.log("null")
//         return this;
//     }
// }

// var mySLL =  new SLL();
// mySLL.addToFront(0);
// mySLL.addToFront(-1);
// mySLL.display();

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy) {
    var newArr = [];
    return newArr;

}