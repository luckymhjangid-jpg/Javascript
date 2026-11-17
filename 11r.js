function removeMango(foods){
    let wMango = [];
    for(let i=0; i< foods.length; i++){
        if(foods[i] ==='Mango'){
            continue;
        }
        else{
            wMango.push(foods[i]);
        }
    }
    for(let i=0; i<wMango.length; i++){
        console.log(wMango[i]);
    }
}
removeMango(["Mango" ,"Apple" , "Banana" , "chickoo" ,"Mango", "Pear"]);