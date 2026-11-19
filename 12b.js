function runTwice(fun){
    fun();
    fun();
}

runTwice(function(){
    console.log('12b');
});

