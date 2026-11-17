function countWords(words){
   const  freq = {};
    for(let i=0; i<words.length; i++){
        const item = words[i];
        if(freq[item] === undefined){
            freq[item]=1;
        }
        else{
            freq[item] +=1;
        }
    }
    console.log(freq);
}
countWords(["Apple" , "Banana" , "chickoo" , "Apple" , "Mango" ,"starFriut"]);