str1 = ['hello' ,'world' ,'search' , 'good'];
str2 = ['not found'];
const item = 'search';
for(let i = 0; i< str1.length; i++){
    if(str1[i] === item){
        console.log(i);
        
    }
    else{
        console.log("Item not in the array");
    }
}
