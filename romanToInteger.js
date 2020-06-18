// const romanToInteger = (num) => {
//     let temp = "";
//     let counter = 0;
//     let numStr = num.toString();

//     if (num < 5) {
//         while (counter < num) {
//             temp += "I"
//             counter++;
//         };
//         return temp;
//     };
    
//     if (num > 5 || num < 10) {
//         let sub = num - 5;
//         while (counter < sub) {
//             temp += 'I';
//             counter++
//         };
//         sub = " "
//         sub = 'V' + temp 
//         return sub;
//     };
// };

// console.log(romanToInteger(9));

//  // const V = 5;
// // const X = 10;
// // const L = 50;
// // const C = 100;
// // const D = 500;
// // const M = 1000;  // const I = 1;


// const romanToInteger = (roman) => {
//     const conversion = {
//         "M": 1000,
//         "D": 500,
//         "C": 100,
//         "L": 50,
//         "X": 10,
//         "V": 5,
//         "I": 1
//     };

//     let tempArr = roman.split('');
//     let total = 0;

//     for (let index = 0; index < tempArr.length; index++) {
//         if (tempArr[index] >= tempArr[index+1]) {
//             total += conversion[tempArr[index]];
//         } else if (tempArr[index] < tempArr[index + 1]) {
//             total = Math.abs(conversion[tempArr[index]] - conversion[tempArr[index+1]]);
//         } else if (tempArr[index] > tempArr[index + 1]) {
//             total = conversion[tempArr[index]] + conversion[tempArr[index+1]]
//         }
//         // total = total + conversion[tempArr[index]];
//     };
//     return total;
// };

// console.log(romanToInteger("LVII"));

// Assigning tbem variables to make it easier terms
const romanToInteger = (roman) => {
    const conversion = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };

    let tempArr = roman.split('');
    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;
    // console.log(tempArr.length);

    for (let index = 0; index < tempArr.length; index++) {
        current = tempArr[index];
        currentValue = conversion[current];
        
        next = tempArr[index + 1];
        nextValue = conversion[next];

        // if (currentValue >= nextValue) {
        //     total += currentValue;
        // } else if (currentValue < nextValue) {
        //     total -= currentValue;
        // } else if (currentValue && !nextValue) {
        //     total += currentValue;
        // }

        // A refactor to make this code run faster
        if (currentValue < nextValue) {
            total -= currentValue; // 0 - 100 = -100 and 500 cant be compared to undefined so it skips to the else statement
        } else {
            total += currentValue; //  -100 + 500 = 400 return total outside the loop
        }
    };
    return total;
};

console.log(romanToInteger("CD"));

 
// Code solution reference by Joan Indiana Lyness and JavaScript in plain English
// https://medium.com/javascript-in-plain-english/algorithms-101-convert-roman-numerals-to-integers-in-javascript-d3aba86a43d4