let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

let color = ["red", "green", "yellow", "blue"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        setTimeout(levelup,1000);
        
    }
});

function levelup(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randNo = Math.floor(Math.random() *3);
    let randColor = color[randNo];
    let randbox = document.querySelector(`.${randColor}`);
    btnFlash(randbox);
    gameSeq.push(randColor);
    // console.log(randbox);
}

function btnFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}

function checkAns(idx){
    
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerText = `Game Over! Score:${level-1} \n Press any key to start again`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpressed(){
    let btn = this;
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },150);
    // console.log(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".box");
for(btns of allbtns){
    btns.addEventListener("click", btnpressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}