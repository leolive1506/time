const hour  = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds  = document.querySelector("#seconds")


const secondsSelect = document.querySelector(".selectSeconds")
const minutesSelect = document.querySelector(".selectMinutes")
const hourSelect = document.querySelector(".selectHour")

let min = 0
let hr = 0
let sec = 0 

let interval



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

    clearFields() {
        sec = 0
        min = 0
        hr = 0
        hour.innerHTML = "0" + hr
        minutes.innerHTML = "0" + min
        seconds.innerHTML = "0" + sec
    },

    validatDisabled(el, el2) { 
        el.hasAttribute("disabled") ? el.removeAttribute("disabled") : el.setAttribute("disabled", true)
    
        el2.hasAttribute("disabled") ? el2.removeAttribute("disabled") : el2.setAttribute("disabled", true)
    }
    
}


const finishTime = () => {
    DOM.stop()

    const body = document.querySelector("body")    
    
    const modalStop = document.querySelector(".modal-stop")
            modalStop.classList.add("on")
    
    body.innerHTML = ""
    body.appendChild(modalStop)
}

const App = {
    selected(select) {

        
        select
            .addEventListener("change", () => {

                let option = select.options[select.selectedIndex].value

                if(select == secondsSelect) {
                    sec = Number(option)
                }
                if(select == minutesSelect) {
                    min = Number(option)
                }
                if(select == hourSelect) {
                    hr = Number(option)
                }

            })
 
    },

    startTemp() {

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

        if(sec <= 60 && sec > 0){
            sec--
        } else if(min <= 60 && min > 0) {
            min--
            sec = 59 
        } else if(hr > 0){
            hr--
            min = 59
            sec = 59 
        } else if(sec == 0 && min == 0 && sec == 0) {
            finishTime()
        }
        
    
        
    }
}



const Build = {
    BuildValuesOption() {

        Utils.gerarOption(secondsSelect)
        Utils.gerarOption(minutesSelect)
        Utils.gerarOption(hourSelect)

    },

    UpdateValuesCards() {

        App.selected(secondsSelect)
        App.selected(minutesSelect)
        App.selected(hourSelect)

    }
}


Build.BuildValuesOption()
Build.UpdateValuesCards()


let validatText = true

const button =  document.querySelector(".start")
const buttonReset =  document.querySelector(".reset")

const buttonStop = document.querySelector(".stop")
buttonStop.setAttribute("disabled", true)


const DOM = {    

    toggleModal() {
        document.querySelector(".wrapper-modal").classList.toggle("visible")
    },
    
    addTime() {
        

            DOM.toggleModal()
        
    },

    start(event) {
        event.preventDefault()
        if(button.innerText == "Continuar") {
            button.innerText = "+Tempo"
        }

        buttonReset.setAttribute("disabled", true)
        interval = setInterval(App.startTemp, 100)
        DOM.addTime()
        Utils.validatDisabled(button, buttonStop)
    },

    stop() {
        clearInterval(interval);
        if(button.innerText == "+Tempo") {
            button.innerText = "Continuar"
        }
        Utils.validatDisabled(button, buttonStop)
        buttonReset.removeAttribute("disabled")
    },


    reset() {
        clearInterval(interval);
        Utils.clearFields()
        Utils.validatDisabled(button, buttonStop)
        DOM.addTime()
    },


    toggle() {
        document.querySelector('.menu-section').classList.toggle('on')
        document.querySelector('nav').classList.toggle('visible')
        document.querySelector('body').style.overflow = 'hidden'
    },
}