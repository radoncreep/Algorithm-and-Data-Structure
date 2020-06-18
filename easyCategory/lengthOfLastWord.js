// Return the length of the last word in a string

// If the last word doesnt exist return zero


// const lengthOfLastWord = (str) => {
//     let tempArray = str.split(' ');
//     console.log(tempArray)
//     let newStr;
//     let len;
    
//     for (let i = 0; i < tempArray.length; i++) {
//         console.log(tempArray[i]);
//         if (i === tempArray.length -1) {
//             newStr = tempArray[i].toString();
//             // console.log(newStr + ' new')
//             len = newStr.length;
//         };
//     };
//     if (newStr === " ") {
//         return 1;
//     } else {
//         return len;``
//     }
    
// };

// console.log(lengthOfLastWord("a "));


const lengthOfLastWord = (s) => {
    let length = 0, max = 0;
    
    for (let i = 0; i < s.length; i++)
    console.log(s[i])
        if (s[i] !== ' ')
            length++, max = length;
        else
            length = 0;
    return max;
};

console.log(lengthOfLastWord("Hello World take"));