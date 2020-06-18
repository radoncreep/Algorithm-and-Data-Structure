// Sorted Array and a target value
// Find the index and return the index of the target value in the sorted array
// return the index of where the target ld be if it were inserted in order


// Test Inputs
const nums  = [1, 3, 5, 6]
const target = 10;

const searchInsert = (nums, target) => {
    if (!nums.length) return null;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        };
    };  
    
    return nums.length
};  

console.log(searchInsert(nums, target));

// const searchInsert = (nums, target) => {
//     let length = nums.length;
//     for (let i = 0; i < length; i++) {
//         let current = nums[i];
//         if (current >= target) {
//             return i;
//         }
//     };
//     return length;
// };  

// console.log(searchInsert(nums, target));