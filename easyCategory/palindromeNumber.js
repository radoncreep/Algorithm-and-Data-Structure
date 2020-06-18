// const palindromeNumber = (num) => {

//     if (num < 0 ) {
//         return false;
//     };
    
//     let reverseNum = num.toString().split('').reverse().join('');
//     let numStr = num.toString();
//     let reverseNumStr = reverseNum.toString();
//     // console.log(numStr.length)
    
//     for (let index = 0; index < numStr.length; index++) {
//         console.log(reverseNumStr[index]);
//         if (reverseNumStr[index] !== numStr[index]) {
//            return false;
//         }
//     };
//     return true;
// };

// Using an optimal method without converting the num to strings

const palindromeNumber = (num) => {
    let reverseNum = 0;
    let remainder = 0;
    let temp = num;

    while (temp > 0) {
        // calc that will get the remainder of the num
        remainder = temp % 10;
        // the reversedNum is the variable in which we are going to append the remainder to
        reverseNum = (reverseNum * 10) + remainder;
        //take out the last digit of num, so as to reverse the digits left
        temp = temp / 10 | 0;
        console.log(reverseNum)
    };

    if (reverseNum === num) {
        return true
    }
    else {
        return false;
    }
};

// 123
// 321
console.log(palindromeNumber(121)); //Both worked but the optimal is faster