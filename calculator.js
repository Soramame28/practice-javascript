function keisanki(){
    let ka = 0;
    
    const gameContainer = document.getElementById("game-container")

    let input1 = document.createElement("input")
    input1.placeholder = "入力１（半角）"

    let input2 = document.createElement("input")
    input2.placeholder = "入力２（半角）"

    let purasu = document.createElement("button")
    purasu.textContent = "＋"

    let mainasu = document.createElement("button")
    mainasu.textContent = "－"

    let jou = document.createElement("button")
    jou.textContent = "✖"

    let jo = document.createElement("button")
    jo.textContent = "÷"

    let kekka = document.createElement("p")
    kekka.textContent = ka

    purasu.addEventListener("click",function(){
        ka = 0;
        let a = Number(input1.value)
        let b = Number(input2.value)
        if(a >= 0 && b >= 0 || a < 0 && b >= 0 || a >= 0 && b < 0 || a < 0 && b < 0){
            ka = a + b;

        }else if (a >= 0){
             ka = a;
            
        }else if (b >= 0){
             ka = b;
             
        }else if (a < 0){
            ka = a;
           
       }else if (b < 0){
        ka = b;
        
   }
        
        kekka.textContent = ka
    })

    mainasu.addEventListener("click",function(){
        ka = 0;
        let a = Number(input1.value)
        let b = Number(input2.value)
        if(a >= 0 && b >= 0 || a < 0 && b >= 0 || a >= 0 && b < 0 || a < 0 && b < 0){
            ka = a - b;

        }else if (a >= 0){
             ka = a;
            
        }else if (b >= 0){
             ka = b;
             
        }else if (a < 0){
            ka = a;
           
       }else if (b < 0){
        ka = b;
        
   }
        
        kekka.textContent = ka
    })

    purasu.addEventListener("click",function(){
        ka = 0;
        let a = Number(input1.value)
        let b = Number(input2.value)
        if(a >= 0 && b >= 0 || a < 0 && b >= 0 || a >= 0 && b < 0 || a < 0 && b < 0){
            ka = a + b;

        }else if (a >= 0){
             ka = a;
            
        }else if (b >= 0){
             ka = b;
             
        }else if (a < 0){
            ka = a;
           
       }else if (b < 0){
        ka = b;
        
   }
        
        kekka.textContent = ka
    })

    jou.addEventListener("click",function(){
        ka = 0;
        let a = Number(input1.value)
        let b = Number(input2.value)
        if(a >= 0 && b >= 0 || a < 0 && b >= 0 || a >= 0 && b < 0 || a < 0 && b < 0){
            ka = a * b;

        }else if (a >= 0){
             ka = a * 0;
            
        }else if (b >= 0){
             ka = b * 0;
             
        }else if (a < 0){
            ka = a * 0;
           
       }else if (b < 0){
        ka = b * 0;
        
   }
        
        kekka.textContent = ka
    })

    jo.addEventListener("click",function(){
        ka = 0;
        let a = Number(input1.value)
        let b = Number(input2.value)
        if(b != 0){
            ka = a / b;
            kekka.textContent = ka
        }else{
        kekka.textContent = "割れない"
       }
        
        
    })

    gameContainer.appendChild(kekka)
    gameContainer.appendChild(input1)
    gameContainer.appendChild(input2)
    gameContainer.appendChild(purasu)
    gameContainer.appendChild(mainasu)
    gameContainer.appendChild(jou)
    gameContainer.appendChild(jo)
}
