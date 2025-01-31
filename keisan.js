function keisanki(){
    let ka = 0;
    
    const gameContainer = document.getElementById("game-container")

    let input1 = document.createElement("input")
    input1.placeholder = "入力１"

    let input2 = document.createElement("input")
    input2.placeholder = "入力２"

    let purasu = document.createElement("button")
    purasu.textContent = "＋"

    let kekka = document.createElement("p")
    kekka.textContent = ka

    purasu.addEventListener("click",function(){
        ka = 0;
        let a = parseInt(input1.value)
        let b = parseInt(input2.value)
        if(a >= 0 && b >= 0){
            ka = a + b;

        }else if (a >= 0){
             ka = a;
            
        }else if (b >= 0){
             ka = b;
             
        }
        
        kekka.textContent = ka
    })


    gameContainer.appendChild(kekka)
    gameContainer.appendChild(input1)
    gameContainer.appendChild(input2)
    gameContainer.appendChild(purasu)
}

keisanki();

