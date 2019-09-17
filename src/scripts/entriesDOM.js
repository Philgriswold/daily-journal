import makeJournalEntryComponent from "./entryComponent.js"

const putItOnThePage = (htmlString) => {
    //this is saying where it wants to go on HTML
    let dailyJournal = document.querySelector(".entryLog");
    for (let index = 0; index < htmlString.length; index++) {
        //this is storing the results of the htmlString loop into journal Entry, 
        //you've got the results, now do something with it!
        const journalEntry = htmlString[index];
        //this is injecting it into the HTML and...
        dailyJournal.innerHTML += makeJournalEntryComponent(journalEntry);
    }
}



export default putItOnThePage;