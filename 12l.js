function countPositive(nums){
    PosCount = 0
    nums.forEach(num => {
        if(num > 0){
            PosCount +=1;
        }
    });
    console.log(`Count of positve numbers ${PosCount}`);
}
countPositive([1,-3,5])