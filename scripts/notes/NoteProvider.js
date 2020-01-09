let notes = []

const setNotes = (noteArray) => {
    notes = noteArray.slice()
}

export const useNotes = () => notes.slice()

export const editNote = (noteObject) => {
    return fetch(`http://localhost:8088/notes/${noteObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObject)
    })
        .then(getNotes)

}

export const deleteNote = (noteId) => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    .then(getNotes)
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const getNotes = () => {
    // Load database state into application state
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then((noteArray) => {
            notes = noteArray.slice()
        })
}
