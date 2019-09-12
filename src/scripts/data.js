const API = {
    getJournalEntries(data) {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json(data))
    }
}

export default API;