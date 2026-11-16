function minMax(nums){
    let max = 0;
    let min = nums[0];
    for(i=0; i< nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
        if(nums[i]<min){
            min = nums[i];
        }
    }
    return [max,min];
}
console.log(minMax([1,-3,5]));