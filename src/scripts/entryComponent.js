// import API from "./data.js"


const makeJournalEntryComponent = (journalEntry) => {
    return `
     <div>
        <h2>Date of Entry:${journalEntry.date}</h2>
        <p>${journalEntry.conceptsCovered}</p>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
    </div>`
}


console.log("journalEntry ", journalEntry);

export default makeJournalEntryComponent;