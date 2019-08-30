/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

console.log("yo javascript whatup");
const journalEntries = [

    {
        dateofEntry: "August, 26 2019",
        conceptsCovered: "functions, objects",
        entry: "we learned about objects, dot notation, and other Javascript functions.",
        mood: "ok",
    },
    {
        dateofEntry: "August, 23 2019",
        conceptsCovered: "Celebrity project presentation",
        entry: "we presented our group projects and other Javascript functions",
        mood: "ready for the weekend",
    },
    {
        dateofEntry: "August, 22 2019",
        conceptsCovered: "We worked on our celebrity page",
        entry: "we spent all day in labs for celebrity project",
        mood: "ready for the weekend",
    },
]


// daily journal part3

const makeJournalEntryComponent = (journalEntry) => {
    return `
     <div>
        <h2>${journalEntry.dateofEntry}</h2>
        <p>${journalEntry.conceptsCovered}</p>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
    </div>`
}


console.log("journalEntry ", journalEntry);

let dailyJournal = document.querySelector(".entryLog");

const putItOnThePage = (htmlString) => {
    dailyJournal.innerHTML += htmlString
}

journalEntries.forEach(journalEntry => {
    const renderJournal = makeJournalEntryComponent(journalEntry)
    putItOnThePage(renderJournal)

});





// Invoke the render function

// const nasaFunction = (item) => {
//     return `
//             <img src="${item.url}" alt="Nasa image">
//             <p>${item.date}</p>
//             <p>${item.explanation}</p>
//             <p>${item.title}</p>
//             <p>${item.copyright}</p>
//        `
// }
// // print to DOM
// const nasaContainer = document.querySelector(".container");

// function printToDomFunction(htmlString) {
// nasaContainer.innerHTML += htmlString;
// }
// fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
// .then(nasa => nasa.json())
// .then(parsedNasa => {
//     printToDomFunction(nasaFunction(parsedNasa));
//     console.table(parsedNasa)
// })