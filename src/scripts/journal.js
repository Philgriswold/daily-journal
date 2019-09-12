import putItOnThePage from "./entriesDom.js"
import API from "./data.js"


API.getJournalEntries().then(data => putItOnThePage(data))