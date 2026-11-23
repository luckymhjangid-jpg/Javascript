function remfirstTwoMango(words){
    let counter =0;
    let  removedTwo = words.filter((word)=>{
            if(counter <2 && word === 'Mango'){
                counter +=1;
                return false;
            }
            
        return true;
    });
    return removedTwo;
}
console.log(remfirstTwoMango(["Mango","Pear", "Jackfruit","Mango","Mango"]));