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

    },
    registerEditListener () {
        entryList.addEventListener("click", event => {
            // console.log(event, "event")
            if (event.target.id.startsWith("editEntry--")) {
                 // Extract entry id from the button's id attribute 
                const EntryToEdit = event.target.id.split("--")[1]
                 /*
                This function will get the entry from the API
                and populate the form fields 
                */

            const updateFormFields = entryId => {

               API.getSingleJournalEntry(EntryToEdit)
               .then(response => {
                   console.log(response)

                // Dot notation is used on "response" to get the values of the indicated keys. That value is then assigned to the appropriate tag on the DOM. This populates the form with the entry that needs to be edited.
                document.querySelector("#concepts").value = response.concepts;
                document.querySelector("#journalEntry").value = response.journalEntry;
                document.querySelector("#journalDate").value = response.journalDate;
                document.querySelector("#mood").value = response.mood;
               })
            }
            updateFormFields(EntryToEdit)
            }
        })
    }
}