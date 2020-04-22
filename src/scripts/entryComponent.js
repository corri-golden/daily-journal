/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/



const makeJournalEntryComponent = (journalEntry) => {
    return `
        <h1>${journalEntry.title}</h1>
        <h2>${journalEntry.date}</h2>
        </h3>${journalEntry.contents}</h3>
    `
}


export default makeJournalEntryComponent