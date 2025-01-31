function keisanki(){
 
    const gameContainer = document.getElementById("game-container")

    let input1 = document.createElement("input")

    let input2 = document.createElement("input")

    let purasu = document.createElement("button")
    purasu.textContent = "＋"

    let kekka = document.createElement("p")



    gameContainer.appendChild(kekka)
    gameContainer.appendChild(input1)
    gameContainer.appendChild(input2)
    gameContainer.appendChild(purasu)
}

keisanki();