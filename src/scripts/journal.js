import API from "./data.js"
import entriesDom from "./entriesDOM.js"

//this goes and gets the data from the API and puts
//and then prints it to the DOM?
API.getJournalEntries().then(data => entriesDom.putItOnThePage(data))

//factory function
//creates the object that the event listener calls

// declare variables
//a big "where on the html" function, it also gets the value of the input
const createJournal = () => {
    let dateInput = document.querySelector("#journalDate").value;
    let conceptInput = document.querySelector("#conceptsCovered").value;
    let entryInput = document.querySelector("#journalEntry").value;
    let moodInput = document.querySelector(".journalMood").value;
    // let radioInput1 = document.querySelector("#moodChoice1").value;

    // this takes all of the targets the sum of all of "where in the html" values
    //and it stores it in one big object called newJournalObj
    const newJournalObj = {
        date: dateInput,
        conceptsCovered: conceptInput,
        entry: entryInput,
        mood: moodInput
    };
    console.log(newJournalObj);
    return newJournalObj;
}

//this goes into the HTML, grabs what a button called "buttonClass" and when
//you click it ...
document.querySelector(".buttonClass").addEventListener("click", (event) => {
    event.preventDefault()
    const newJournal = createJournal()
        // API.createEntry(newJournalObj())
        //this goes into the API into the createJournal entry object which posts
        //to JSON database and then clears it out..
    API.createEntry(newJournal)
        .then(response => {
            document.querySelector("#conceptsCovered").value = "";
            document.querySelector("#journalEntry").value = "";
            document.querySelector("#journalDate").value = "";
            document.querySelector(".journalMood").value = "";
            // document.querySelector("#moodChoice1").value = "";
            document.querySelector(".entryLog").innerHTML = "";
        //this takes the cleared out information and puts it on the DOM.
            API.getJournalEntries()
                .then(entry => {
                    console.log(entry)
                    entriesDom.putItOnThePage(entry)
                });
        })
})

// this goes to legend where the radio buttons are
document.querySelector("#filterMoods").addEventListener("click", event => {

//this is grabbing all the buttons in the html
// const allMoods = document.getElementBy("mood");
// allMoods.forEach(radioButton => {
        //event.target.value gets the value of what radio button was pushed and
        //then stores it in moodName
        console.log("mood", event);
        let moodName = event.target.value;
        API.filterJournalEntries(moodName)
            .then(data => {
                console.log("data", data)
                entriesDom.moodFilter(data, moodName);
    })
})