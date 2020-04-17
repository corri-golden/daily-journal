/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/



const makeJournalEntryComponent = (entry) => {
    return `
        <h1>${entry.title}</h1>
        <h2>${entry.date}</h2>
        </h3>${entry.contents}</h3>
    `
}


// Fetch from the API
    fetch("http://localhost:3000/entries") 
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
        console.log(makeJournalEntryComponent(entry))
        const journalContainer = document.querySelector(".entryLog")
        journalContainer.innerHTML += makeJournalEntryComponent(entry)
        // What should happen when we finally have the array?
    })
})






    

    // const renderJournalEntries = (entries) => {
    //     for (const journalEntry of journalEntries){

        

    //     const journalContainer = document.querySelector(".entryLog")
    //     journalContainer.innerHTML += makeJournalEntryComponent(
    //         journalEntry.title,
    //         journalEntry.date,
    //         journalEntry.contents)
    //     }
    // }

    // console.log(journalEntries)
    // renderJournalEntries(journalEntries)






   











