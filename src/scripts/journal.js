/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = {
    date: "1/1/2020",
    title: "JavaScript",
    contents: "Functions",
    mood: "sad"

}

const journalEntry2 = {
    date: "2/2/2020",
    title: "React",
    contents: "Capstone",
    mood: "happy"
}

const journalEntry3 = {
    date: "3/3/2020",
    title: "Django",
    contents: "Full Stack",
    mood: "Very Happy" 
}

const entries= [""]

entries.push(journalEntry)
entries.push(journalEntry2)
entries.push(journalEntry3)

console.log(entries, "entries")



// const makeJournalEntryComponent = () => {
//     return `
//     <h1>Array Methods</h1>
//     <h2>We learned about array methods, but only for Each made sense.</h2>
//     <h2>07/24/2019</h2>
//     `
// }


// const renderDom = document.querySelector(".entryLog")
// renderDom.innerHTML = makeJournalEntryComponent()


   











