import saveObject from "./saveEntry.js"

const searchFormContainer = document.querySelector("#searchFormContainer")
// console.log(searchFormContainer, "searchFormContainer")

const htmlElements = {
    buildAndAppendForm(entry) {
        let searchForm =
        `
    <form class= "flex">
        <input type="hidden" id="entryId" value="" />
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
            <label for="concepts">Concepts Covered</label>
            <input type="text" name="concepts" id="concepts">
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <input type="textarea" name="journalEntry" id="journalEntry">
        </fieldset>
        <fieldset>
            <label for="mood-input">Mood</label>
            <select id="mood" name="mood-input">
                <option value="Happy">Happy</option>
                <option value="Fine">Fine</option>
                <option value="Sad">Sad</option>
            </select>
        </fieldset>
        <fieldset>
        
    </form>
    `
    // <button id="recordEntry">Record</button>
    if (entry === "edit") {
        searchFormContainer.innerHTML = ""
        searchFormContainer.innerHTML = searchForm += `<div id="buttonContainer"><button id="saveChanges">Save Changes</button></div>`
    } else {
        searchFormContainer.innerHTML = ""
        searchFormContainer.innerHTML = searchForm += `<div id="buttonContainer"><button id="recordEntry">Record New Journal Entry</button></div>`
        const saveJournalEntryButton = document.querySelector("#recordEntry")
        saveJournalEntryButton.addEventListener("click", saveObject.postEntry)
        }
    },
    radioButtonsEventListener() {


    },
    buildAndAppendSearch () {
        //this function builds and append search input
        const searchHtml = 
        `
        <fieldset>
            <legend>Search Journal Entries</legend>
            <input type="search" name="search" id="searchInput"</input>
        </fieldset>
        `
        const searchContainer = document.querySelector("#searchInput")
        searchContainer.innerHTML = searchHtml
    }
}

export default htmlElements