
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