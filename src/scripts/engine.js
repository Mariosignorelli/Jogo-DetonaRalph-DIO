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
    },
};

function randomSquere(){
    state.view.squeres.forEach((squere) =>{
        squere.classList.remove("enemy")
    })
    let randomNumber = Math.floor(Math.random() * 9)
    let randomSqueres = state.view.squeres[randomNumber]
    randomSqueres.classList.add("enemy")
}
function moveEnemy(){
    state.value.timeId = setInterval(randomSquere, state.value.gamevelocity)
}

function addlistenerHitBox(){
    state.view.squeres.forEach((squere) => {

    })
  
}
function init(){
  moveEnemy()
}
init()