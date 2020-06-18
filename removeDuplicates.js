// Remove Duplicates

// Question link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// const nums = [1, 1, 2];

// Logging function
const lg = (value) => {
    console.log(value);
};

// const removeDuplicates = (nums) => {

//     let map = new Map();
//     let counter = 0;

//     while (counter < nums.length) {
//         map.set(nums[counter], true);
//         counter++;
//     };
//     nums = [];
//     for (let index of map.keys()) {
//         nums.push(index);
//     };
//     lg(nums);
//     return nums
// };

// lg(removeDuplicates([1, 1, 2]));

// const removeDuplicates = (nums) => {
//     return [...new Set(nums)];
// };

// lg(removeDuplicates([1, 1, 2]));


// const removeDuplicates = (nums) => {
//     let i = 1;
//     let j = 0; 

//     while (i < nums.length) {

//         let num = nums[i];
//         console.log(`${num} num`);
//         console.log(j + ' j');

//         if (nums[j] !== num){
//             console.log(`${[j]} incremment `)
//             nums[++j] = num;
//         } else {
//             i++;
//         };

//         console.log(nums)
//     };

//     return j + 1;
// };

// lg(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


const removeDuplicates = (nums) => {
    let i = 1;
    let j = 0; 

    while (i < nums.length) {
        let i = 0;
        let j = 1;
      
        for (; j < nums.length; j += 1) { // 9
          if (nums[j] !== nums[i]) {
            i += 1; // 4
            console.log(`i ${i} j ${j}`);
            nums[i] = nums[j];
            
            console.log(nums);
          };
        };
      
        return i + 1;
    }
};

lg(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// [0,1,1,1,1,2,2,3,3,4];
// [0,1,2,1,1,2,2,3,3,4]; i 2 j 5
// [0,1,2,3,1,2,2,3,3,4]; i 3 j 7
// [0,1,2,3,4,2,2,3,3,4]; i 4 j 9