function containsDuplicateWithoutMap(arr) {
    //O(n^2)
    // for loop that goes through all elements
    var counter = 1;
    for(var index = 0; index<arr.length; index++) {
        for(var index2 = index+1; index2<arr.length; index2++) {
            //if some condition is met, return true there are duplicates
            console.log(counter);
            if(arr[index] === arr[index2]) {
                return true;
            }
            counter++;            
        }
    }
    return false; // there no duplicates, true if there are duplicates
}

function containsDuplicateWithMap(arr) {
    //O(n)
    var counter = 1;
    var dataMap = new Set();
    for(var index =0; index<arr.length; index++) {
        console.log(counter);
        if(dataMap.has(arr[index])) {
            return true;
        }
        //curr elem does not exist in map
        dataMap.add(arr[index]);
        counter++;
    }

    return false;
}

myArr = [
    "a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l","m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
myArr2 = [
    "a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l","m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z","z"];



console.log(containsDuplicateWithoutMap(myArr)); //false
console.log(containsDuplicateWithoutMap(myArr2)); //true

console.log(containsDuplicateWithMap(myArr)); //false
console.log(containsDuplicateWithMap(myArr2)); //false