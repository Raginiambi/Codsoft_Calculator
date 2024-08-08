let btns = document.querySelectorAll(".btns");
let input = document.querySelector("input");


btns.forEach((btn) => {
    btn.addEventListener(("click"),()=>{
        const id = btn.getAttribute("id");
       if(id == "AC"){
        input.value = "";
       }else if(id == "="){
        input.value = eval(input.value); 
        
      }else if(id == "DEL"){
         input.value = input.value.slice(0,-1);
      }
      else{
      input.value += id ;
      }
    }
    )})
