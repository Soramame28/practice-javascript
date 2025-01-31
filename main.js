const gameSelector = document.getElementById('game-select');
const gameContainer = document.getElementById("game-container");
gameSelector.addEventListener('change',function(){
    gameContainer.innerHTML = '';
    switch (gameSelector.value){
        case 'number-guess':
            startNumberGuessGame();
            break;
        case 'clicker':
            ClickCounterGame();
            break;
        case 'rps':

            break;
    
    }
})

function ClickCounterGame(){
    let count = 0;
    
   const gameContainer = document.getElementById("game-container")
   
    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";

    let button3 = document.createElement("button");
    button3.textContent = "リセット";

    let sa

    let counter = document.createElement("p");
    counter.textContent = count;
    
    button1.addEventListener("click",function(){
        if(count < 100){
            count++;
            counter.textContent = count;
        }
    })

    button2.addEventListener("click",function(){
         if(count < 100){
             count = count + 10;
             counter.textContent = count;
         }if(count > 100){
             sa = count -100;
             count = count - sa;
             counter.textContent = count;
         }
        
    })
    
    button3.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);
    
 }

function startNumberGuessGame(){
    
 
    let count = 0;
    
    const gameContainer = document.getElementById("game-container")
    
    const randomNumber = Math.floor(Math.random()*100) + 1;
    
    let message = document.createElement("p");
    
    
    let input = document.createElement("input");
    
    input.type = "number";
    
    input.placeholder = "好きな数字を入力してください (1 ~ 100)";
    
    gameContainer.appendChild(message);
    gameContainer.appendChild(input);

    let button = document.createElement("button");
    button.textContent = "確認"

    button.addEventListener("click",function(){
        const val = parseInt(input.value)
        if (randomNumber == val){
            message.textContent = "正解"
        
        }else if(randomNumber < val){
            
            message.textContent = "大きい"
        }else if(randomNumber > val){
            
            message.textContent = "小さい"
        }else{
            
            message.textContent = "はよやれ"
        }



        // message.textContent = `${Math.abs(randomNumber - inzery) <= 5 ? "惜しい！": "" }${randomNumber > inzery?"大きい": "小さい"}` by Noritake

        count2++;
        countDisplay.textContent = `試行回数： ${count2}`;

})
    gameContainer.appendChild(button);


    let button5 = document.createElement("button");
    button5.textContent = "答え"
    button5.addEventListener("click",function(){
        message.textContent = randomNumber
    })

    gameContainer.appendChild(button5)

    let count2 = 0;
    const countDisplay = document.createElement("p");
    countDisplay.textContent = `試行回数： ${count2}`;
    gameContainer.appendChild(countDisplay);
    
}