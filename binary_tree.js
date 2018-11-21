function search(array, value) {
    // set a placeholder for the low, high and midpoint(s) and a starting position
    let lowIndex = 0;
    let highIndex = array.length - 1;
    let midpoint = 0;
    let currentElem = 0;
    // iterate through the array and set the midpoint and starting position at this halfway point
    for (let i = 0; i < array.length; i++) {
        midpoint = Math.floor((lowIndex + highIndex) / 2);
        currentElem = array[midpoint];
        // if where we're at is less than our target value then set the low point above and search to the top
        if (currentElem < value) {
            lowIndex = midpoint + 1;
            // else if the target value is less set the high point below and search to the bottom
        } else if (currentElem > value) {
            highIndex = midpoint - 1;
            // if neither of those then it must be the midpoint
        } else {
            return midpoint;
        }
    }
    // all else fails not there
    return null;
}

// test to see if what we got is what we accepted
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
