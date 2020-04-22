import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"








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
    .then(entries => renderJournalEntries(entries))

    

    







   











