        let input = document.getElementById('input')
        let calculation =localStorage.getItem('calculation' || '');
        let buttons = document.querySelectorAll(".btn");
        let equal = document.getElementById('equal');
        let clear = document.getElementById('clear');
        let mul = document.getElementById('mul');
        let dot = document.getElementById('dot');
        let div = document.getElementById('div');
        let one = document.getElementById('one');
        let two = document.getElementById('two');
        let three = document.getElementById('three');
        let four = document.getElementById('four');
        let five = document.getElementById('five');
        let six = document.getElementById('six');
        let seven = document.getElementById('seven');
        let eight = document.getElementById('eight');
        let nine = document.getElementById('nine');
        let zero = document.getElementById('zero');
        let add = document.getElementById('add');
        let sub =document.getElementById('sub');

        function draw(name ,value){
            name.innerHTML = value
        }

      draw(one,'1');
      draw(two,'2');
      draw(three,'3');
      draw(four,'4');
      draw(five,'5');
      draw(six,'6');
      draw(seven,'7');
      draw(eight,'8');
      draw(nine,'9');
      draw(zero,'0');
      draw(add,'+');
      draw(sub,'-');
      draw(equal,'=');
      draw(clear,'clear');
      draw(mul,'*');
      draw(div,'/');
      draw(dot,'.');


      buttons.forEach((btn)=>{
        btn.addEventListener("click" ,()=>{
            calculation = calculation + btn.innerHTML;
            input.value = calculation;
            console.log(calculation);
        })
      });
      equal.addEventListener("click",()=>{
        calculation = eval(calculation);
        localStorage.setItem('calculation' ,calculation);
        input.value = calculation;
       console.log(calculation);
      });
      clear.addEventListener("click",()=>{
        localStorage.setItem('calculation' , calculation = "");
      input.value = calculation;
      console.log(calculation);
      });
      document.addEventListener("DOMContentLoaded",()=>{
      input.value = calculation;
      console.log(calculation);
      });