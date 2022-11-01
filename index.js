let count = 0
let guestcount = 0
let scoreid = document.getElementById("scoreboard")
let guestid = document.getElementById("guestboard")

function plusone() {
    count += 1
    scoreid.textContent = count
}

function plustwo() {
    count += 2
    scoreid.textContent = count
}

function plusthree() {
    count += 3
    scoreid.textContent = count
}

function plusoneguest() {
    guestcount += 1
    guestid.textContent = guestcount
}

function plustwoguest() {
    guestcount += 2
    guestid.textContent = guestcount
}

function plusthreeguest() {
    guestcount += 3
    guestid.textContent = guestcount
}

function reset() {
    count = 0 
    guestcount = 0
    scoreid.textContent = count
    guestid.textContent = guestcount
}

