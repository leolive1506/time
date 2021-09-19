let sec = 0
let min = 0
let hour = 0
let interval

const time = document.querySelector("#hourCro")

function hourHTML(hour, min, sec) {
    return `<p id="hour">${hour}:${min}:${sec}</p>`
}

function start() {
    interval = setInterval(addNumber, 1000);
}


function addNumber() {
    
    if(sec < 60){
        sec++
    } else if(min < 60) {
        min++
        sec = 0        
    } else {
        hour++
        min = 0
    }

    
    time.innerHTML = hourHTML(hour, min, sec)
}


function stop() {
    clearInterval(interval);
}

function reset() {
    sec = 0
    min = 0
    hour = 0
    clearInterval(interval);
    time.innerHTML = hourHTML(hour, min, sec)
}