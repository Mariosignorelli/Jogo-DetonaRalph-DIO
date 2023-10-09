const state = {
    view:{
        squeres: document.querySelectorAll(".squere"),
        enemy: document.querySelectorAll(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    value:{
        timeId: null,
        countDowmTimerId: setInterval(countDowm, 1000),
        gamevelocity: 1000,
        hitposition: 0,
        result: 0,
        currentTimer: 60,
    },
};
function countDowm(){
    state.value.currentTimer--;
    state.view.timeLeft.textContent = state.value.currentTimer
    if(state.value.currentTimer <= 0){
        clearInterval(state.value.countDowmTimerId)
        clearInterval(state.value.timeId)
        alert(`Game over sua pontuação foi ${state.value.result}` )
    }
}
function play(){
    let audio = new Audio("./src/audios/hit.m4a")
    audio.play()
}

function randomSquere(){
    state.view.squeres.forEach((squere) =>{
        squere.classList.remove("enemy")
    })
    let randomNumber = Math.floor(Math.random() * 9)
    let randomSqueres = state.view.squeres[randomNumber]
    randomSqueres.classList.add("enemy")
    state.value.hitposition = randomSqueres.id
}
function moveEnemy(){
    state.value.timeId = setInterval(randomSquere, state.value.gamevelocity)
}

function addlistenerHitBox(){
    state.view.squeres.forEach((squere) => {
        squere.addEventListener("mousedown", () =>{
            if (squere.id === state.value.hitposition) {
                state.value.result++
                state.view.score.textContent = state.value.result
                state.value.hitposition = null
                play()
            }
        })
    })
  
}
function init(){
  moveEnemy()
  addlistenerHitBox()

}
init()