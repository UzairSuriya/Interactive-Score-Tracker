let countElHome = document.getElementById("countdownHome")

let countElGuest = document.getElementById("countdownGuest")

let scoreHome = 0
let scoreGuest = 0

function add1Home() {
    scoreHome += 1
    countElHome.textContent = scoreHome
}
function add2Home() {
    scoreHome += 2
    countElHome.textContent = scoreHome
}
function add3Home() {
    scoreHome += 3
    countElHome.textContent = scoreHome
}


function add1Guest() {
    scoreGuest += 1
    countElGuest.textContent = scoreGuest
}
function add2Guest() {
    scoreGuest += 2
    countElGuest.textContent = scoreGuest
}
function add3Guest() {
    scoreGuest += 3
    countElGuest.textContent = scoreGuest
}
