/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntries = [
    {
    date: "1/1/2020",
    title: "JavaScript",
    contents: "Functions",
    mood: "sad"

    },
    {
    date: "2/2/2020",
    title: "React",
    contents: "Capstone",
    mood: "happy"
    },
    {
    date: "3/3/2020",
    title: "Django",
    contents: "Full Stack",
    mood: "Very Happy" 
    }
]



const makeJournalEntryComponent = (title, date, contents) => {
    return `
        <h1>${title}</h1>
        <h2>${date}</h2>
        </h3>${contents}</h3>
    `
}



    // for (const journalEntry of journalEntries){
    //     const journalContainer = document.querySelector("#entrylog")
    //     journalContainer.innerHTML = makeJournalEntryComponent()
    // }

    const renderJournalEntries = (entries) => {
        for (const journalEntry of journalEntries){

        

        const journalContainer = document.querySelector(".entryLog")
        journalContainer.innerHTML += makeJournalEntryComponent(
            journalEntry.title,
            journalEntry.date,
            journalEntry.contents)
        }
    }

    console.log(journalEntries)
    renderJournalEntries(journalEntries)




// const makeJournalEntryComponent = () => {
//     return `
//     <h1>Array Methods</h1>
//     <h2>We learned about array methods, but only for Each made sense.</h2>
//     <h2>07/24/2019</h2>
//     `
// }


// const renderDom = document.querySelector(".entryLog")
// renderDom.innerHTML = makeJournalEntryComponent()


   











