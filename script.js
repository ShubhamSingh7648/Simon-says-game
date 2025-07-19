let gameseq=[];
let userseq=[];
let btns = ["red","blue","green","yellow"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;
        levelup()
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () { 
        btn.classList.remove("flash");
    }, 200);
}
 
function checkAns(idx) {
    // let idx = level-1;
    if(gameseq[idx]== userseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000)
        }
        // console.log("correct");
    }else {
        h2.innerHTML = `Game Over!<br><b> Your Score: ${level}</b><br> Press any key to start the Game Again`;
        resetGame();
    }
}


function resetGame() {
    userseq =[];
    gameseq =[];
    level = 0;
    started = false;
}


function levelup() {
    userseq=[];
    level++;
    h2.innerText = `level ${level}`; 
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
} 

function btnPress() {
    // console.log( this);
    let btnUser = this;
    gameFlash(btnUser);
    let userColor = btnUser.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
} 

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) { 
    btn.addEventListener("click", btnPress); 
}

