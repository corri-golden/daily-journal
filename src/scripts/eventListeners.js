import API from "./data.js"
import domEntries from "./entriesDOM.js"




const entryList = document.querySelector("#entryLog")

export default {
    registerDeleteListener () {
        entryList.addEventListener("click", event => {
            console.log(event)
            if (event.target.id.startsWith("deleteEntry--")) {
                // Extract entry id from the button's id attribute
            const EntryToDelete = event.target.id.split("--")[1]
                console.log(event.target.id.split("--"), "split")
                console.log(EntryToDelete, "entry")
            // Invoke the delete method, then get all entries and render them
            API.deleteEntry(EntryToDelete)
                .then(API.getJournalEntries)
                // .then(response => console.log(response, "response"))
                .then(entries => domEntries.renderJournalEntries(entries))
            }
        })

    }
}