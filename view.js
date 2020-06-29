const mainElement = document.querySelector('main')
const outputElement = document.querySelector('#output')

const xInput = document.createElement('input')
xInput.type = "number"
xInput.setAttribute("placeholder", 0)
const yInput = document.createElement('input')
yInput.type = "number"
yInput.placeholder = "0"

const addButton = document.createElement('button')
addButton.append('+')
const subrtactButon = document.createElement('button')
subrtactButon.append('-')
const multiplyButton = document.createElement('button')
multiplyButton.append('*')
const divideButton = document.createElement('button')
divideButton.append('/')


mainElement.append(
    'My Calculator',
    xInput,
    yInput, 
    addButton,
    multiplyButton,
    divideButton,
    subrtactButon

)

function addHandler () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, add)
    outputElement.innerHTML = result
}

addButton.addEventListener('click', addHandler)

subrtactButon.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, subtract)
    outputElement.innerHTML = result
})

multiplyButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, multiply)
    outputElement.innerHTML = result
})

divideButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, divide)
    outputElement.innerHTML = result
})
