const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

function updateHour() {
    const date = new Date()

    let newHour = date.getHours()
    let newMinutes = date.getMinutes()
    let newSeconds = date.getSeconds() 

    if(newHour < 10 || newMinutes < 10 || newSeconds < 10) {

        if(newHour < 10) {
            hour.innerHTML = "0" + newHour    
        } else if(newMinutes < 10) {
            minutes.innerHTML = "0" + newMinutes    
        } else if(newSeconds < 10) {
            seconds.innerHTML = "0" + newSeconds    
        } 
    } else {
    
        hour.innerHTML = newHour
        minutes.innerHTML = newMinutes
        seconds.innerHTML = newSeconds

    }

    
    // hour.innerHTML = newHour
    // minutes.innerHTML = newMinutes
    // seconds.innerHTML = newSeconds


    
}

setInterval(updateHour, 1000)

