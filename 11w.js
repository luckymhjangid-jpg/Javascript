function findIndex(word){
    const freq ={};
    for(let i=0; i<word.length; i++){ 
        if(freq[word]){
            freq[word[i]]+=1;
        }
        else{
            freq[word[i]]=1;
        }
    }
    console.log(freq);
   
}
words =["apple","guava","mango"];
findIndex(words);