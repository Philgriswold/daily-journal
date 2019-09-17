import API from "./data.js"
import putItOnThePage from "./entriesDom.js"


//this goes and gets the data from the API and puts 
//and then prints it to the DOM?
API.getJournalEntries().then(data => putItOnThePage(data))

//factory function
//creates the object that the event listener calls

// declare variables
//a big "where on the html" function
const createJournal = () => {
    let dateInput = document.querySelector("#journalDate").value;
    let conceptInput = document.querySelector("#conceptsCovered").value;
    let entryInput = document.querySelector("#journalEntry").value;
    let moodInput = document.querySelector(".journalMood").value;

    const newJournalObj = {
        date: dateInput,
        conceptsCovered: conceptInput,
        entry: entryInput,
        mood: moodInput
    };
    console.log(newJournalObj);
    return newJournalObj;
}

//this targets the button and after the user has clicked it
document.querySelector(".buttonClass").addEventListener("click", (event) => {
    event.preventDefault()
    const newJournal = createJournal()
        // API.createEntry(newJournalObj())
    API.createEntry(newJournal)
        .then(response => {
            document.querySelector("#conceptsCovered").value = "";
            document.querySelector("#journalEntry").value = "";
            document.querySelector("#journalDate").value = "";
            document.querySelector(".journalMood").value = "";
            document.querySelector(".entryLog").innerHTML = "";
            API.getJournalEntries()
                .then(entry => {
                    console.log(entry)
                    putItOnThePage(entry)
                });
        })
})