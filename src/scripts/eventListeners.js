import API from "./data.js"
import domEntries from "./entriesDOM.js"
import defaultElements from "./createForm.js"




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
                   defaultElements.buildAndAppendForm("edit")

                // Dot notation is used on "response" to get the values of the indicated keys. That value is then assigned to the appropriate tag on the DOM. This populates the form with the entry that needs to be edited.
                document.querySelector("#entryId").value = response.id
                document.querySelector("#concepts").value = response.concept;
                document.querySelector("#journalEntry").value = response.entry;
                document.querySelector("#journalDate").value = response.date;
                document.querySelector("#mood").value = response.mood;
                console.log(response)

                // After form populates, .scrollTop scrolls to the top of the page where the form is.
                // .then(document.documentElement.scrollTop = 0)

                const saveChanges = document.querySelector("#saveChanges")
                // attach event listener to save button
                saveChanges.addEventListener("click", function (){
                    // const hiddenEntryId = document.querySelector("#entryId")
                    // get values of input fields
                    let entryID = document.querySelector("#entryId").value
                    const date = document.querySelector("#journalDate").value
                    const concepts = document.querySelector("#concepts").value
                    const journalEntry = document.querySelector("#journalEntry").value
                    const mood = document.querySelector("#mood").value

                    const updatedObject = {
                        date: date,
                        concept: concepts,
                        entry: journalEntry,
                        mood: mood,
                    }

                API.editSingleJournalEntry(entryID, updatedObject)
                    .then(() => {
                        defaultElements.buildAndAppendForm()
                        API.getJournalEntries()
                        .then(response => domEntries.renderJournalEntries(response))
                    })
                })


               })
            }
            updateFormFields(EntryToEdit)
            }
        })
    },
}