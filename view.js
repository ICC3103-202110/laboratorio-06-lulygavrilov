const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

//Everything functional

function getTitle(){
    return chalk.magenta(
        figlet.textSync("Unit Converter App",{
            font: "straight",
            horizontalLayout: "full"
        })
    )
}

module.exports = {
    getTitle
}
/*
function getTable(model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const{total} = model
    return [
        {'Bill Amount': '$'+billAmount,'Tip (%)':percentage+'%','Tip':'$'+tip,'Total':'$'+total}
    ]
}

function inputForm(model){
    const {billAmount} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            type: 'input',
            name: 'billAmount',
            message: 'Bill Amount?',
            default: billAmount,
            validate: function(value){
                if(isNaN(value) === true ){
                    return 'Please enter a number!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name:'percentage',
            message: 'Tip(%)?',
            default: percentage,
            validate: function(value){
                if(isNaN(value) === true ){
                    return `Please enter a number!`
                } else {
                    return true
                }
            }
        },
    ])
}

//The Actual View

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}
*/