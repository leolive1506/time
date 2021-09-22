function addTime() {
    document.querySelector(".wrapper-modal").classList.toggle("visible")
}


const hour  = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds  = document.querySelector("#seconds")


const secondsSelect = document.querySelector(".selectSeconds")
const minutesSelect = document.querySelector(".selectMinutes")
const hourSelect = document.querySelector(".selectHour")

let min = 0
let h = 0
let sec = 0

const Utils = {

    gerarOption(element) {
    
        let options = []
        
        for(let i = 0; i <= 60; i++) {
        
                options.push(i)
        }
        
        
        options.forEach((option, index) => {
        
            element.innerHTML += `
                <option id="${index}" id=>${option}</option>
                `
            
        })
    
    }, 

    selected(select, element, valueUpdate) {
        let option = select.options[select.selectedIndex]

        element.innerHTML = option.value
    }
}



const Start = {
    BuildValuesOption() {

        Utils.gerarOption(secondsSelect)
        Utils.gerarOption(minutesSelect)
        Utils.gerarOption(hourSelect)

    },

    UpdateValuesCards() {

        secondsSelect
            .addEventListener("change", () => Utils.selected(secondsSelect, seconds, sec))
        minutesSelect
            .addEventListener("change", () => Utils.selected(minutesSelect, minutes))
        hourSelect
            .addEventListener("change", () => Utils.selected(hourSelect, hour))

    }
}

// audio alarme
// function audio(event) {
//     event.preventDefault()
    

//     const alarme = new Audio
//     alarme.src = "../audio/mixkit-warning-alarm-buzzer-991.wav"

//     alarme.play()
// }

Start.BuildValuesOption()
Start.UpdateValuesCards()