const state = {
    view:{
        squeres: document.querySelectorAll(".squere"),
        enemy: document.querySelectorAll(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    value:{
        timeId: null,
        gamevelocity: 1000,
        hitposition: 0,
        result: 0,
    },
};

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
            }
        })
    })
  
}
function init(){
  moveEnemy()
  addlistenerHitBox()
}
init()