import API from "./data.js"
import domEntries from "./entriesDOM.js"




const saveObject = {
    postEntry() {

  // To POST a single journal entry and re-render the entries on the DOM      
    const journalDate  = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const journalEntry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#mood").value
    console.log(journalEntry, concepts, mood, journalDate)


    


    // if (journalDate === "" || concepts === "" || journalEntry === "") {
    //     alert("Required fields must be filled out.")
    // } else if (concepts.length >= 30) {
    //     alert("Concepts field length is too long. Please shorten message.")
    // } else {
        const newJournalEntry = {
            "date": journalDate,
            "concept": concepts,
            "entry": journalEntry,
            "mood": mood,
            
               
    }
    console.log(newJournalEntry)
    API.saveEntryToAPI(newJournalEntry)
    .then(API.getJournalEntries)
    .then(response => {domEntries.renderJournalEntries(response)
        document.querySelector("#journalDate").value = ""
        document.querySelector("#concepts").value = ""
        document.querySelector("#journalEntry").value = ""
        document.querySelector("#mood").value = ""
    })
    }
}
// }

export default saveObject







