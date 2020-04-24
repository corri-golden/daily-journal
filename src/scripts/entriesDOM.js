import makeJournalEntryComponent from "./entryComponent.js"


//Purpose: This file manages what appears on the DOM

let entryLog = document.querySelector("#entryLog")
let newJournalEntryHTML = ""

//iterate through array of journal entries and add them to DOM
const domEntries = {
    renderJournalEntries (entries) {
    entries.forEach(entry => {
        newJournalEntryHTML += makeJournalEntryComponent(entry)
        entryLog.innerHTML = newJournalEntryHTML
    
    })
}
}

console.log(entryLog, "entryLog")



export default domEntries