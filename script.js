let countElHome = document.getElementById("countdownHome")

let countElGuest = document.getElementById("countdownGuest")

let countdigitHome = 0
let countdigitGuest = 0

function add1Home() {
    countdigitHome += 1
    countElHome.textContent = countdigitHome
}
function add2Home() {
    countdigitHome += 2
    countElHome.textContent = countdigitHome
}
function add3Home() {
    countdigitHome += 3
    countElHome.textContent = countdigitHome
}


function add1Guest() {
    countdigitGuest += 1
    countElGuest.textContent = countdigitGuest
}
function add2Guest() {
    countdigitGuest += 2
    countElGuest.textContent = countdigitGuest
}
function add3Guest() {
    countdigitGuest += 3
    countElGuest.textContent = countdigitGuest
}
