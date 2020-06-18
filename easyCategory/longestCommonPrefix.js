
// let tempArr = [];

// const longestCommonPrefix = (inputArray) => {
//     let currentChar;
//     let nextChar;

//     for (let index = 0; index < inputArray.length; index++) {
//         currentChar = inputArray[index].charAt(index);
//         nextChar = inputArray[index + 1].charAt(index);
        
//         if (currentChar === nextChar) {
//             tempArr.push(currentChar);
//         } else {
//             return " "
//         }
//     };

//     return tempArr
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))



const longestCommonPrefix = (inputArray) => {
    const len = inputArray.length;

    if (len === 0 ) return "";

    let prefix = inputArray[0];
   

    console.log(inputArray.indexOf("flight") + 'INDEXOF')

    for (let index = 1; index < len; index++) {
        console.log(inputArray[index].indexOf(prefix) + ' ---------')
        console.log(index + ' index');
        while(inputArray[index].indexOf(prefix) !== 0) {
            // console.log(prefix[prefix.length-1] + ' prefix');
            prefix = prefix.substring(0, prefix.length - 1);
            console.log(prefix)
            console.log(inputArray[index].indexOf(prefix) + ' while')

            if (prefix === "") return ""
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))