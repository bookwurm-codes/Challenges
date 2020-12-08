/*
    Given k, a positive integer greater than 1, Write a function steps(k) that returns an integer representing the least number of steps a k needs to be reduced to 1 with the following operations.
    a) +1
    b) -1
    c) divide by 2 if even
*/

// Input:
//  k       Integer greater than 1
//
// Output:
//  Number of steps to reduce to 1 according to rules
function steps(k) {
    let count = 0;
    while (k > 1) {
        if (k % 2 === 0) {
            k /= 2;
        } else if (k % 4 === 3 && k > 3) {
            // Numbers just below factors of 4 (2^2); except 3
            k++;
        } else {
            k--;
        }
        count++;
    }
    return count;
}
