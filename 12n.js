function removeMango(fruits){
    const withoutMango = fruits.filter((friut)=>{
        return friut !=='Mango';
    })
    return withoutMango;
}

console.log(removeMango(['Mango' ,'Apple' ,'Orange' ,'Banana']));

function onlyPos(number){
    const positivenumber = number.filter((number)=>{
        return number > 0
    })
    return positivenumber;
}
console.log(onlyPos([1,-2,5,-7]));

function longer5(words){
    let longerthan5 = words.filter((words)=>{
        return words.length > 5
    })
    return longerthan5
}
console.log(longer5(["beneficial" , "Apple", "Mango","ambidextrous"]));