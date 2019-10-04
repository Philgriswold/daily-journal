let url = "localhost:3000"
const API = {
    getJournalEntries(data) {
        return fetch(`http://${url}/entries`)
            .then(response => response.json(data))
    },
    filterJournalEntries(mood) {
        return fetch(`http://localhost:3000/entries?mood=${mood}`)
            .then(response => response.json())
    },
    createEntry(newEntry) {
        return fetch("http://localhost:3000/entries",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    deleteJournalEntries(data) {
        return fetch("http://localhost:3000/entries"), {
            method: "DELETE"
    }
            .then(response => response.json(data))
}
}


export default API;