/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/



const makeJournalEntryComponent = (journalEntry) => {
    return `
        <h1>${journalEntry.concept}</h1>
        <h2>${journalEntry.date}</h2>
        <h3>${journalEntry.entry}</h3>
        <h3>${journalEntry.mood}</h3>
    `
}


export default makeJournalEntryComponent