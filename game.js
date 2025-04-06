let h2 =  document.querySelector("h2");
let body = document.querySelector("body");
let gameSeq = [];
let userSeq = [];
let btns = ["red", 'yellow', "blue", "green"]
let started = false;
let level = 0;
let i = Math.floor(Math.random()*4); console.log(i);
    let clr = btns[i];
    let btn = document.querySelector(`.${clr}`);
    
    
    function reset(){
    gameSeq = [];
     userSeq = [];
     started = false;
     level = 0;
    
        
    }


function lvlup(){
    level++;
    h2.innerText= `Level ${level}`;
    let i = Math.floor(Math.random()*4); console.log(i);
    let clr = btns[i];
    let btn = document.querySelector(`.${clr}`);
    gameSeq.push(btn.id);
    console.log(gameSeq);
    btnflash(btn);
    userSeq= [];
   

}


function btnflash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    }, 500)

}


function ubtnflash(btn){
    btn.classList.add("green2");
    setTimeout(function(){
        btn.classList.remove("green2");
    }, 500)
 
}
function btnpress(){
    if(started == true){
        let btn = this;
        ubtnflash(btn);
        usercolor = btn.getAttribute("id");
        userSeq.push(usercolor);
        console.log(userSeq);
        checkAns(userSeq.length-1);    
        
    }

}


let boxes = document.querySelectorAll(".btn");
for (box of boxes){
    box.addEventListener("click", btnpress);
}
function checkAns(idx){
    console.log(`current level ${level}`);
    
    if(userSeq[idx]===gameSeq[idx] && userSeq.length == gameSeq.length){
        console.log("Same Value");
        setTimeout(lvlup, 1000);
        
    } else if(userSeq[idx]===gameSeq[idx]){
        h2.innerText = "......."
    }
    else{
        h2.innerText = `Game over your score is ${level}, press any key to restart the game`;
        document.addEventListener("keypress", reset());
    }
}
    

document.addEventListener("keypress", function(){
    if (started == false){
        lvlup()
    
        console.log("game started");
        started = true;
        
        

    }
        
});
