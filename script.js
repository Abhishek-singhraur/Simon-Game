let gameSq =[];
let userSq = [];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;

let btns = ["red","yellow","purple","green"];



document.addEventListener("keypress",function() {

    if( started == false) {

        started = true;
        levelUp();
    }
   
}); 

function gameFlash(btn) {

    
     btn.classList.add("flash");
     setTimeout(function() {
        btn.classList.remove("flash");
       
     },250);
}


function userFlash(btn) {

    
    btn.classList.add("user");
    setTimeout(function() {
       btn.classList.remove("user");
      
    },250);
}

function levelUp() {
    userSq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndex = Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let ranBtn = document.querySelector(`.${randColor}`);
    gameSq.push(randColor);
    console.log("game",gameSq);
    gameFlash(ranBtn);
    
}
function checkAns(idx) {

   
    if(userSq[idx] === gameSq[idx]) {
        if(userSq.length == gameSq.length) {
            setTimeout(levelUp, 1000);
           
        }
    } 
    else {
        h2.innerHTML = `Game over your score was  <b>${level} </b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
         setTimeout(function() {
                  document.querySelector("body").style.backgroundColor = "white";
         },150);
    } 
    
    reset();

}


function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSq.push(userColor);
    console.log("user",userSq);
    checkAns(userSq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
      btn.addEventListener ("click",btnPress);
}

function reset () {
    started = false;
    gameSq = [];
    userSq = [];
    level = 0;
}