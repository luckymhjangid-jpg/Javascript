function removeMango(foods){
    let wMango = [];
    let count = 0;
    for(let i=0; i< foods.length; i++){

        if(foods[i] ==='Mango' && count <2){
             count +=1;
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
removeMango(["Mango" ,"Apple" , "Banana" , "chickoo" ,"Mango", "Pear" ,"Mango"]);