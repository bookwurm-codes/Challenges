// Given a Roman numeral, find the corresponding decimal value.
function romanToDec (num) {
    let dec = 0;
    const arr = num.split('').map(a => a === 'M'? 1000:
                                       a === 'D'? 500:
                                       a === 'C'? 100: 
                                       a === 'L'? 50:
                                       a === 'X'? 10:
                                       a === 'V'? 5:
                                       a === 'I'? 1: 0);

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        const next = index+1 < arr.length? arr[index+1]: 0;

        if (next > element) {
            element *= -1;
        }
        dec += element;
    }

    return dec;
}

console.log(romanToDec('IX'));
// Output: 9

console.log(romanToDec('VII'));
// Output: 7

console.log(romanToDec('MCMIV'));
// Output: 1904

console.log(romanToDec('MMXX'));
// Output: 2020