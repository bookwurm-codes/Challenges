// Find longest substring with max k distinct characters
//      NOTE: This function assumes the string is lowercase alphabetic for simplicity
// Inputs
//      string          characters to substring
//      maxDistinct     Maximum number of unique characters allowed in substring
// Output
//      Number of characters in substring
function FindLongestSubLowDistinct(string, maxDistinct) {
    let longestSub = 0;
    let startIndex = 0;
    let endIndex = 0;
    let characters = [];
    let numDistinct = 0;

    // Build an array of character counts in substring
    for (let index = 0; index < 26; index++) {
        characters[index] = 0;  
    }
    
    const aLetter = 'a';
    const aLetterCode = aLetter.charCodeAt(0);

    // loop over string while the end of the substring hasn't gone past the end
    while (endIndex < string.length && startIndex <= endIndex) {

        // Number of distinct chars above max, move startIndex and adjust counts array
        if (numDistinct > maxDistinct) {
            characters[string.charCodeAt(startIndex) - aLetterCode]--;
            if (characters[string.charCodeAt(startIndex) - aLetterCode] == 0) {
                numDistinct--;
            }
            startIndex++;

        // Number of distinct chars less than, equal to max
        // expand substring and adjust counts array and longest substring
        } else {
            if (characters[string.charCodeAt(endIndex) - aLetterCode] == 0) {
                numDistinct++;
            }
            characters[string.charCodeAt(endIndex) - aLetterCode]++;
            if (numDistinct <= maxDistinct && endIndex - startIndex + 1 > longestSub) {
                longestSub = endIndex - startIndex + 1;
            }
            endIndex++;
        }
    }

    return longestSub;
}


// Main script code to call function
let testString = 'aabcdefff'
// Find longest substring of 3 or less unique characters
console.log(FindLongestSubLowDistinct(testString,3));
// Expected output: 5 (corresponding to defff)