import API from "./data.js"
import domEntries from "./entriesDOM.js"
import defaultElements from "./createForm.js"




const entryList = document.querySelector("#entryLog")
const search = document.querySelector("#searchInput")
const radioButtons = document.getElementsByName("Button")


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
    radioButtonsEventListener () {
        // .forEach method is used on RadioButtons to add and event listener to each button.
        radioButtons.forEach((button => {
        // Event listener waits for a click then executes the function.
        button.addEventListener("click", event => {
            // console.log(event, "events")
        // Calling getJournalEntries from api.js. Returns an array.
        API.getJournalEntries()
        // .then waits for the function to resolve then passes the returned data into the next function.
        .then((response) => {
            // console.log(response)
            // .filter method is called on the returned data (response) and the result (which is an array) is stored in a variable. "entry" is taco. 
            const filterEntries= response.filter((entry) =>{
            //testing for to get back the moods for each entry
                // console.log(entry.mood, "entry.mood")
            // Entries are evaluated to either true or false. True entires are stored in the filterEntries array.
            return entry.mood === button.id
        })
            // renderJournalEntries is called from entriesDOM.js and the filterEntries array is passed as the argument. This renders the filtered entries to the DOM.
            domEntries.renderJournalEntries(filterEntries)
            
        })
        })

        }))
        
    },
    searchListener () {
        // add an event listener to the search input that search through the entries when you press enter
        search.addEventListener("keypress", event => {
            if (event.charCode === 13) {
                const searchTerm = event.target.value
                //checking to see if i get the value back
                // console.log(searchTerm, "searchTerm")
                API.searchAllJournalEntries(searchTerm)
                .then(response => {
                //checking to see if the value is in the api
                    // console.log(response, "response")
                    domEntries.renderJournalEntries(response)
                })

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