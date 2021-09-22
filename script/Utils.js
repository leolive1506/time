function gerarOption(element) {

    let options = []
    
    for(let i = 0; i <= 60; i++) {
    
            options.push(i)
    }
    
    
    options.forEach((option, index) => {
    
        element.innerHTML += `
            <option id="${index}" id=>${option}</option>
            `
        
    })

} 

module.exports = gerarOption