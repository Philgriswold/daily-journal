import makeJournalEntryComponent from "./entryComponent.js"

const entriesDom = {

    putItOnThePage: (htmlString) => {
        //dailyJournal puts all the input in a big container
        let dailyJournal = document.querySelector(".entryLog");
        for (let index = 0; index < htmlString.length; index++) {
            //this is storing the results of the htmlString loop into journal Entry,
            //you've got the results, now do something with it!
            const journalEntry = htmlString[index];
            //this is injecting it into the HTML and...
            dailyJournal.innerHTML += makeJournalEntryComponent(journalEntry);
        }
    },
    //moodFilter is a function that has htmlString-mood parameters
    //htmlString is taco, mood is defined in the API
    moodFilter: (data, mood) => {
        console.log("logged", mood)
        let entryLog = document.querySelector(".entryLog"); //targeting the Where in HTML and storing it in entryLog
        entryLog.innerHTML = ""; //takes whatever is found in entryLog and clears it.
        data.forEach(entry => { //htmlString is still taco? entry is from...
            if (entry.mood === mood) { //i think this all stays taco but when its call on journal.js it takes on value
                entryLog.innerHTML += makeJournalEntryComponent(entry)
            } //the above line
        });
    }
}

export default entriesDom