

function add (x, y) {
    return x + y
}
function subtract (x, y) {
    return x - y
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y
}


let CALCULATOR_POWER = 'on'
function calculator (x, y, equipment) { // callback
    if (CALCULATOR_POWER === 'on') {
        return equipment(x, y)
    } else {
        return null
    }
}

const addOutput = calculator(1, 2, add)
const subractOutput = calculator (1, 2, subtract)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide)
console.log({ addOutput, multiplyOutput, divideOutput })