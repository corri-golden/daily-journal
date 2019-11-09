console.log("pop")

const journalEntry = {
    dateOfEntry: "11/01/2019",
    conceptsCovered: "Objects",
    journalEntry: "1",
    moodOfTheDay: "Happy",
}

console.log(journalEntry.dateOfEntry)

let journalEntries = []
journalEntries.push(journalEntry)
console.log(journalEntries)

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

journalEntries.push(secondEntry, thirdEntry)
console.log("journalEntries")