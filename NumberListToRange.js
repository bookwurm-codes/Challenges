"use strict";
// Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.
// Assume that all numbers will be greater than or equal to 0, and each element can repeat

function findRanges(nums) {
    let ranges = [];

    for (let index = 0; index < nums.length; index++) {
        let rangeStr = `${nums[index]}->`
        while (index < nums.length-1 && nums[index]+1 >= nums[index+1]) {
            index++;
        }
        rangeStr += nums[index];
        ranges.push(rangeStr);
    }

    return ranges;
}

let testNums = [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15];

console.log(findRanges(testNums)); // 0->2 4->9