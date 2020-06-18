// let haystack = "aaaaa";
// let needle = "bba";

// In this question we are tasked to replicate the indexOf method
// to arrive at the same solution if it were used in the function
// There goes the second solution from the first

function log(value) {
    console.log(value);
};

let haystack = "hello";
let needle = "ll";

// const strStr = (haystack, needle) => {
//     if (needle === "") return 0;

//     return haystack.indexOf(needle);
// };

// log(strStr("hello", "ww"));

// Optimized solution from leetcode dicuss tab

const strStr = (haystack, needle) => {
    if (!needle.length) return 0;

    for (let i in haystack) {
        if (haystack[i] === needle[0] 
            && haystack.substring(i, Number(i) + needle.length) === needle) {
                return i
        };
    };
    return -1;
};

log(strStr("hello", "ww"));