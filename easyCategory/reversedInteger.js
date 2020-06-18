
// console.log(reversedInteger(123));
let str;
// Second solution
function reverseEle(x) {
    if (x < Math.pow(-2, 31) || x > (Math.pow(2, 31) - 1)){
        return 0;
    } else {
        return parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);  
    } 

};

console.log(reverseEle(-123))


// const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)