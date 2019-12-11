let notes = []





export const usenotes = () => notes

export const saveNote = note => {
    fetch('http://localhost:8080/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(notes)
    })
    .then(getNotes)
}

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(setNotes)
}