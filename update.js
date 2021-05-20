

//the code around tipValue is to avoid big decimal numbers and round up to two

function tempConvert(value,Unit1,Unit2){
    if (Unit1 === 'Celsius' && Unit2 === 'Fahrenheit'){
        return (1.8*value + 32)
    }
    else if (Unit1 === 'Celsius' && Unit2 === 'Kelvin'){
        return (273.15 + value)
    }
    else if (Unit1 === 'Fahrenheit' && Unit2 === 'Kelvin'){
        return (((value-32)/1.8) + 273.15)
    }
    else if (Unit1 === 'Fahrenheit' && Unit2 === 'Celsius'){
        return ((value-32)/1.8)
    }
    else if (Unit1 === 'Kelvin' && Unit2 === 'Fahrenheit'){
        return (1.8*(value-273))+32
    }
    else if (Unit1 === 'Kelvin' && Unit2 === 'Celsius'){
        return (value-273.15)
    }
    else{
        return value
    }
}

//'Celsius','Fahrenheit','Kelvin'

function update(source, value, Unit1, Unit2, model){
    //actual:
    if (source.toLowerCase() === 'yes'){
    return{
        ...model,
        leftValue: value,
        leftUnit: Unit1,
        rightValue: tempConvert(value,Unit1,Unit2),
        rightUnit: Unit2}
        
    }
    else if (source.toLowerCase() === 'no'){
        return{
        ...model,
        leftValue: tempConvert(value,Unit1,Unit2),
        leftUnit: Unit2,
        rightValue: value,
        rightUnit: Unit1
        }
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