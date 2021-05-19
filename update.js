

//the code around tipValue is to avoid big decimal numbers and round up to two

function tempConvert(leftVal,leftU,rightU){
    if (leftU === 'Celsius' && rightU === 'Fahrenheit'){
        return (1.8*leftVal + 32)
    }
    else if (leftU === 'Celsius' && rightU === 'Kelvin'){
        return (273.15 + leftVal)
    }
    else if (leftU === 'Fahrenheit' && rightU === 'Kelvin'){
        return (((leftVal-32)/1.8) + 273.15)
    }
    else if (leftU === 'Kelvin' && rightU === 'Fahrenheit'){
        return (1.8*(leftVal-273))+32
    }
    else if (leftU === 'Kelvin' && rightU === 'Celsius'){
        return (leftVal-273.15)
    }
}

//'Celsius','Fahrenheit','Kelvin'

function update(leftVal, leftU, rightU, model){
    //actual:
    return {
        ...model,
        leftValue: leftVal,
        leftUnit: leftU,
        rightValue: tempConvert(leftVal,leftU,rightU),
        rightUnit: rightU
    } 
}


module.exports = {
    update
}

/*
function tipNew(bill, percent){
    const tipValue = bill*percent/100
    return Math.round((tipValue + Number.EPSILON)*100) /100
}

//the code around tipValue is to avoid big decimal numbers and round up to two

function totalNew(bill, percent){
    return (+bill + +tipNew(bill,percent))
}

function update(bill, percent, model){
    //actual:
    const {tip} = model
    const {total} = model
    return {
        ...model,
        billAmount: bill,
        percentage: percent,
        tip: tipNew(bill,percent),
        total: totalNew(bill,percent)
    } 
}

module.exports = {
    update
}
*/