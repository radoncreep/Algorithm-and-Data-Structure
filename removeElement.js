// nums = [3,2,2,3], val = 3;

// let nums = [0,1,2,2,3,0,4,2], val = 2

// const removeElement = (nums, val) => {
//     let i = 1;
//     let j = 0;
    
//     if (nums.length === 1 && nums[j] === val) {
//         return nums.splice(nums[j], 1) + ' ihcihs'
//     };

//     if (nums.length === 1 && nums[j] !== val){
//         return nums;
//     };

//     while (i < nums.length) {
//         let i = 0;
//         let j = 1;

//         for (; j < nums.length; j +=1) { 
//             // console.log(`i ${i} ${nums[i]} j ${j} ${nums[j]}`);
//             if (nums[i] === val) {
//                 if (nums[i] === nums[j]) {
//                     nums[i] = nums[j+1];
//                     nums.splice(nums[j+1], 2);
//                     console.log(`${nums} first`)
//                 } else {
//                     nums[i] = nums[j];
//                     nums.splice(nums[j-1], 1);
//                     console.log(`${nums} second`);
//                 }
//             };
//             i += 1; //3
//             // console.log(`${nums} final`);
           
//         };
//         if (nums[i] !== val) {
//             return nums + ' jiug';
//         }
//         return i;
//     };
// };

// console.log(removeElement([0,1,2,2,3,0,4,2], 5));



const removeElement = (nums, val) => {
    if(!nums) return 0;
    let i = 0;
    
    for (let j = 0; j < nums.length; j++) { 
        console.log(`${i} ${j}`);
        if (nums[j] !== val) { 
            nums[i] = nums[j];
            i++ 
        };
    };
    return i;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// [0,1,2,2,3,0,4,2]

// [0,1,3,2,3,0,4,2] @ i 2 j 4

// [0,1,3,0,3,0,4,2] @ i 3 j 5

// [0,1,3,0,4,0,4,2] @ i 4 j 6