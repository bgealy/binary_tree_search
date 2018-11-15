// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

// // if array is not in ascending order:
// // let numbers = [100, 200, 5, 13, 35];
// // numbers.sort(function(a, b) {
// //   return a - b;
// // });
// // console.log(numbers);

function search(array, value) {
    let lowIndex = 0;
    let highIndex = array.length - 1;
    let midpoint = 0;
    let currentElem = 0;
    for (let i = 0; i < array.length; i++) {
        midpoint = Math.floor((lowIndex + highIndex) / 2);
        currentElem = array[midpoint];
        if (currentElem < value) {
            lowIndex = midpoint + 1;
        } else if (currentElem > value) {
            highIndex = midpoint - 1;
        } else {
            return midpoint;
        }
    }
    return null;
}


function assertEquals(actual, expected, testName){
    if (actual === expected) {
        console.log(`PASSED – ${testName}: Found ${value} at index ${output}`);
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual)
    }
}

let array = [1, 3, 16, 22, 31, 33, 34];
let value = 34;
const output = search(array, value);
assertEquals(output, 6, 'should return index of target num 34 at index 6');
