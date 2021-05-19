
const{inputAndListForm} = require('./view')
const {printTable} = require('console-table-printer')
const update = require('./update')

//Impure
async function app (state,update,view){
    while (true){
        const{model,currentView} = state
        const{title,table} = currentView
    //input output
        console.clear
        console.log(title)
        printTable(table)
    //from inquirer
        const {isSource,Value,Unit1,Unit2} = await inputAndListForm(model)
        const updatedModel = update(isSource,Value,Unit1,Unit2,model)
        state = {
         ...state,
        model: updatedModel,
        currentView: view(updatedModel)
    }
    }
} 

module.exports = {
    app
}


/* 
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

//Impure

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
    // Showing Title& Table from model
        console.clear()
        console.log(title)
        printTable(table)
    //Retrieving answers from inquire and using them to update model
        const {billAmount, percentage} = await inputForm(model)
        const updatedModel = update(billAmount,percentage,model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}
*/