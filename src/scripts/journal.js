import API from "./data.js"
import domEntries from "./entriesDOM.js"








/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)



// Calling getJournalEntries method on API object from api.js
API.getJournalEntries()
    // .then waits for getJournalEntries to resolve then sends the JSON response to renderDom where it's passed into renderJournalEntries
    .then(entries => domEntries.renderJournalEntries(entries))



//Collect Form Field Values
//1. Use document.querySelector to select your input fields.
//2. Use the .value property on the input field elements to get the text that you typed/chose.





//event listener for recording journal entry
//1st target the element
const recordEntryBtn = document.querySelector("#recordEntry")

const createJournalEntry = (journalDate, concepts, journalEntry, mood) => {
    return {
        date: journalDate,
        concept: concepts,
        entry: journalEntry,
        mood: mood
    }
}

// add event listener collection the value inputs
recordEntryBtn.addEventListener("click", function () {
    const journalDate  = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const journalEntry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#mood").value
    
    console.log(journalEntry, concepts, mood)
    
    const newJournalEntry = createJournalEntry(journalDate, concepts, journalEntry, mood)
    API.saveEntryToAPI(newJournalEntry).then(API.getJournalEntries).then(domEntries.renderJournalEntriesToDom)
    })


    

    








    

    







   











