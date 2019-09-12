import makeJournalEntryComponent from "./entryComponent.js"

const putItOnThePage = (htmlString) => {
    for (let index = 0; index < htmlString.length; index++) {
        const journalEntry = htmlString[index];

        let dailyJournal = document.querySelector(".entryLog");
        dailyJournal.innerHTML += makeJournalEntryComponent(journalEntry);

    }

}

export default putItOnThePage;