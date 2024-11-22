function RPS(){
    const choices = ["gu👊","choki✌","pa🖐","muteki🤞"];
    // ↑この書き方は、配列です。C言語参照
    // 面倒な書き方↓
    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu";
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option2.value = choki;
    // option2.textContent = choki;
    // select.appendChild(option2);
    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option3);
    //  gameContainer.appendChild(select);
    
    
    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    })
    gameContainer.appendChild(select);

    
    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "100px";
    image.style.height = "100px";
    image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
    
    gameContainer.appendChild(image);
    
    //forEach　配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach（配列の中身 => ｛命令｝）
}