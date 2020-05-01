import makeJournalEntryComponent from "./entryComponent.js"


//Purpose: This file manages what appears on the DOM

let entryLog = document.querySelector("#entryLog")


//iterate through array of journal entries and add them to DOM
const domEntries = {
    renderJournalEntries (entries) {
        let newJournalEntryHTML = ""
        // console.log(entries, "entries")
    entries.forEach(entry => {
        console.log(entry)
        newJournalEntryHTML += makeJournalEntryComponent(entry)
        entryLog.innerHTML = newJournalEntryHTML
    
    })
}
}

console.log(entryLog, "entryLog")



export default domEntries