// Fetch from the API
// fetch("http://localhost:3000/entries") 
// .then(entries => entries.json())  // Parse as JSON
// .then(parsedEntries => {
//     parsedEntries.forEach(entry => {
//     console.log(makeJournalEntryComponent(entry))
//     const journalContainer = document.querySelector(".entryLog")
//     journalContainer.innerHTML += makeJournalEntryComponent(entry)
//     // What should happen when we finally have the array?
// })
// })


//Purpose: This file manages API requests
const baseURL = "http://localhost:3000/entries"

// API module, an object containing functions which are called methods when they're inside an object
const API = {
// Fetch GETs all journal entries from the API and converts them to JSON. Called on main.js
//-------------- GETS ALL ---------    
getJournalEntries () {
// fetch does a GET call to get back data
        return fetch("http://localhost:3000/entries")
// .then waits for the fetch call to complete then converts the data (response) into JSON format.
            .then(response => response.json())
    },

deleteEntry (entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
    method: "DELETE"
    })
        .then(response => response.json())
},

getSingleJournalEntry(entryId) {
    // GET the journal entry with the specified ID number
    return fetch(`http://localhost:3000/entries/${entryId}` )
        .then(response => response.json())
},

saveEntryToAPI(newJournalEntry){
        return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
        })
    },
editSingleJournalEntry(entryId, entry){
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
        })
    },
searchAllJournalEntries(userInput) {
    return fetch(`${baseURL}??&&q=${userInput}` )
        .then(response => response.json())
},
}



export default API

