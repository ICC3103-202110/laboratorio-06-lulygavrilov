const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

//Everything functional; no change in global variables

function getTitle(){
    return chalk.magenta(
        figlet.textSync("Unit Converter App",{
            font: "straight",
            horizontalLayout: "full"
        })
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const{rightUnit} = model
    return [
        {'leftValue': leftValue,'leftUnit':leftUnit,
        'rightValue': rightValue,'rightUnit': rightUnit}
    ]
}

function inputAndListForm(model){
    const {leftValue} = model
    const{rightUnit} = model
    return inquirer.prompt([
        { type: 'input',
        name: 'isSource',
        message: 'Left temperature is source?',
        default: 'Y/n'},
        { type: 'input',
        name: 'Value',
        message: 'Temperature value to convert?',
        default: '(number)'},
        {type: 'list',
        name:'Unit1',
        message: 'From?',
        choices: ['Celsius','Fahrenheit','Kelvin'],
        default: '(Use arrow keys)'},
        {type: 'list',
        name:'Unit2',
        message: 'To?',
        choices: ['Celsius','Fahrenheit','Kelvin'],
        default: rightUnit}
    ])
}

//The Actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputAndListForm,

}
/*

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