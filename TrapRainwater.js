// Trap rain water: Count total units of trapped rainwater in an elevation range

let elevation = [1,0,2,0,1,4,3]; // This should catch 4

let trapped = CountTrapped(elevation);
console.log(`Rainwater Trapped: ${trapped}`);

function CountTrapped(elevation) {
    let highestLeft = [elevation[0]];

    // Store left highest elevation at each index
    for (let index = 1; index < elevation.length; index++) {
        const element = elevation[index];
        highestLeft[index] = Math.max(element, highestLeft[index-1]);
    }

    // Find right highest elevation at each index and trapped
    let trapped = 0;
    let highestRight = elevation[elevation.length - 1];

    for (let index = elevation.length - 2; index >= 0; index--) {
        const element = elevation[index];
        highestRight = Math.max(element, highestRight);
        // trapped is difference between current element and shortest highest elevation (can't go negative)
        trapped += Math.max(Math.min(highestLeft[index],highestRight) - element, 0);
    }

    return trapped;
}