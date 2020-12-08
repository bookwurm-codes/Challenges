// sort array of numbers with values of 0, 1, 2
function SortNums(arr) {
    let lowNums = [];
    let midNums = [];
    let highNums = [];

    let low = arr[0];
    let high = arr[0];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        switch (element) {
            case low:
                lowNums.push(element);
                break;
            case high:
                highNums.push(element);
                break;
            default:
                midNums.push(element);
                break;
        }
    }

    lowNums.push(midNums, highNums);
    return lowNums;
}


let nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1];
console.log(`Before sort: ${nums}`);

nums = SortNums(nums);
console.log(`After sort: ${nums}`);
