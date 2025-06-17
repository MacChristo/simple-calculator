const commonKeys = document.getElementsByClassName("common-keys")

const resetInput = document.getElementById('reset')
const deleteLastInput = document.getElementById('del')

//display screen of calculator
const displayScreen = document.getElementById('screen')


document.addEventListener(("keydown"), (keyPressed)=>{
    const numKeys = ['0','1','2','3','4','5','6','7','8','9','*', '+', '-', '/']
   if (numKeys.includes(keyPressed.key)) {
    displayScreen.textContent += keyPressed.key
    if (displayScreen.textContent.length>13) {
        displayScreen.textContent = displayScreen.textContent.slice(0,13)
    }
    } else if (keyPressed.key === 'Backspace') {
    displayScreen.textContent = displayScreen.textContent.slice(0, -1)        
    } else if (keyPressed.key === 'Enter'){
        displayScreen.textContent = eval(displayScreen.textContent)
    }
}) 

//Add event listeners to keys

for (let i = 0; i < commonKeys.length; i++) {
    commonKeys[i].addEventListener(('click'), ()=>{
     displayScreen.textContent += commonKeys[i].innerHTML
     if (displayScreen.textContent.length>13) {
    displayScreen.textContent = displayScreen.textContent.slice(0,13)
}
})}

// Clears calculator display totally
const clearDisplay = ()=>{
    displayScreen.textContent=''
}

//Clear the calculator input one at a time
deleteLastInput.addEventListener(('click'), ()=>{
    displayScreen.textContent = displayScreen.textContent.slice(0, -1)
})

const evaluateInput = ()=>{
    try {
    displayScreen.textContent = eval(displayScreen.textContent)
    if (displayScreen.textContent.length>13) {
    displayScreen.textContent = displayScreen.textContent.slice(0, 13)
}
    } catch (error) {
        displayScreen.textContent="Syntax Error"
        setTimeout(()=>{displayScreen.textContent=" "}, 1000)
    }
}


const body = document.body
const buttons = document.querySelectorAll('.theme-btn')

//Load saved theme 
const savedTheme = localStorage.getItem("theme") || "red"

buttons.forEach((btn)=>{
    btn.addEventListener(("click"), ()=>{
        const selectedTheme = btn.dataset.theme
        // console.log(selectedTheme);
        applyTheme(selectedTheme)
        localStorage.setItem("theme", selectedTheme)
    })
})

const applyTheme = (theme) => {
    //reset the button id and set the new one
    body.id = theme

    //add an active class to the clicked button
    buttons.forEach((btn) => {
        btn.classList.toggle("active-btn", btn.dataset.theme === theme)
    });
}

applyTheme(savedTheme)
