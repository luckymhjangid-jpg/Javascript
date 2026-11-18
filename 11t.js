function removeMango(foods){
    let wMango = [];
    let count = 0;
    let  rfoods = foods.reverse()
    for(let i=0; i< rfoods.length; i++){
        if(rfoods[i] ==='Mango' && count <2){
             count +=1;
            continue;
           
        }
        else{
            wMango.push(rfoods[i]);
        }
    }
    for(let i=0; i<wMango.length; i++){
        console.log(wMango[i]);
    }
  
}
removeMango(["Mango" ,"Apple" , "Banana" , "chickoo" ,"Mango", "Pear" ,"Mango"]);