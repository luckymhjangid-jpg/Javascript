function arrayswap(array){
    const lastvalue = array.length -1;
    temp = array[lastvalue];
    array[lastvalue] = array[0];
    array[0] = temp;
    return array
}
console.log(arrayswap([1,20,22,24,5]));