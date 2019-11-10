console.log("pop")

const journalEntry = {
    dateOfEntry: "11/01/2019",
    conceptsCovered: "Objects",
    journalEntry: "1",
    moodOfTheDay: "Happy",
}

console.log(journalEntry.dateOfEntry)

// let journalEntries = []
// journalEntries.push(journalEntry)
// console.log(journalEntries)

let secondEntry = {
    dateOfEntry: "11/02/2019",
    conceptsCovered: "Arrays",
    journalEntry: "2",
    moodOfTheDay: "Sad",
}

let thirdEntry = {
    dateOfEntry: "11/03/2019",
    conceptsCovered: "Objects",
    journalEntry: "3",
    moodOfTheDay: "Happy",
}

// journalEntries.push(secondEntry, thirdEntry)
// console.log("journalEntries")

let journalEntries = [
    {
        dateOfEntry: "11/01/2019",
        conceptsCovered: "Objects",
        journalEntry: "1",
        moodOfTheDay: "Happy",
    },

    {
        dateOfEntry: "11/02/2019",
        conceptsCovered: "Arrays",
        journalEntry: "2",
        moodOfTheDay: "Sad",
    },

    {
        dateOfEntry: "11/03/2019",
        conceptsCovered: "Objects",
        journalEntry: "3",
        moodOfTheDay: "Happy",
    }
]


const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h1>Array Methods</h1>
    <h2>We learned about array methods, but only for Each made sense.</h2>
    <h2>07/24/2019</h2>
    `
}
console.log(makeJournalEntryComponent)

const renderDom = {
    renderJournalEntries(entries) {
        let HtmlForAllEntries = ""
        journalEntries.forEach(entry => {
            const entryHTML = makeJournalEntryComponent(entry)
            HtmlForAllEntries += entryHTML
        })
        const logArticle = document.querySelector(".entryLog")
        logArticle.innerHTML = HtmlForAllEntries
    }
}
