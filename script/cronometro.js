const hour  = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds  = document.querySelector("#seconds")
const button = document.querySelector("#start")

let sec = 0
let min = 0
let hr = 0
let interval

function start() {
    interval = setInterval(addNumber, 1000);
    button.setAttribute("disabled", true)
}

function addNumber() {    
    if(sec < 60){
        sec++
    } else if(min < 60) {
        min++
        sec = 0        
    } else {
        hr++
        min = 0
    }
    

    if(hr < 10 || min < 10 || sec < 10) {


        if(hr < 10) {
            hour.innerHTML = "0" + hr
        } else {
            hour.innerHTML = hr
        }

        if(min < 10) {
            minutes.innerHTML = "0" + min  
        } else {
            minutes.innerHTML = min
        }

        if(sec < 10) {
            seconds.innerHTML = "0" + sec  
        } 
        else {
            seconds.innerHTML = sec
        }
    }

}

   

function stop() {
    clearInterval(interval);
    button.removeAttribute("disabled")
}
    
function reset() {
    sec = 0
    min = 0
    hr = 0
    clearInterval(interval);
    hour.innerHTML = "0" + hr
    minutes.innerHTML = "0" + min
    seconds.innerHTML = "0" + sec
    button.removeAttribute("disabled")
    start()
}


function toggle() {
    document.querySelector('.menu-section').classList.toggle('on')
    document.querySelector('nav').classList.toggle('visible')
    document.querySelector('body').style.overflow = 'hidden'
}
