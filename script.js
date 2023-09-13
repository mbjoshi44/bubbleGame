var clutter = "";
var timer = 60;
var hitRN=0;
var scoreNum = 0;

alert("match  number with hit value and get point ")


const createBubble =()=>{

    for(let i = 1;i<=54;i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
       document.querySelector("#pbtm").innerHTML = clutter
}

const createTimer =()=>{
 var timerint= setInterval(()=>{
    if(timer>0){
        timer --;
        document.querySelector("#timerVal").textContent = timer
    }else{
        clearInterval(timerint)
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
    }
 },1000)
}

const setHit =()=>{
    hitRN  = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRN
}

const setScore =()=>{    
    scoreNum +=10;
    document.querySelector("#scoreVal").textContent=scoreNum;
}

const setScoreNegative =()=>{    
    scoreNum -=5;
    document.querySelector("#scoreVal").textContent=scoreNum;
}

document.querySelector("#pbtm").addEventListener("click", (e)=>{
      var num = Number(e.target.textContent);
      if(num === hitRN){
        setScore()
        clutter = "";
        createBubble()
        setHit()
      }else{
        setScoreNegative()
      }
})

createTimer()
createBubble()
setHit()
