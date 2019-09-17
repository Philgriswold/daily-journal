const API = {
    getJournalEntries(data) {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json(data))
    },
    createEntry(newEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    }
}

export default API;