import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteListComponent = () => {

    eventHub.addEventListener("noteHasBeenEdited", event => {
        const updatedNotes = useNotes()
        render(updatedNotes)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editNote--")) {
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    noteId: noteId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            deleteNote(noteId).then(
                () => {
                    const theNewNotes = useNotes()
                    render(theNewNotes)
                }
            )
        }
    })

    const renderNotesAgain = () => {
        const allTheNotes = useNotes()
        render(allTheNotes)

    }

    eventHub.addEventListener("noteCreated", event => {
        renderNotesAgain()
    })

    eventHub.addEventListener("showNoteButtonClicked", event => {
        renderNotesAgain()
    })

    const render = (notesCollection) => {
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return `
                    <section class="note">
                        <div>${individualNote.suspect}</div>
                        <div>${individualNote.text}</div>
                        <div>${new Date(individualNote.date).toLocaleDateString("us-en")}</div>
                        <div>${new Date(individualNote.date).toLocaleTimeString("us-en")}</div>
                        <button id="deleteNote--${individualNote.id}">Delete</button>
                        <button id="editNote--${individualNote.id}">Edit</button>
                    </section>
                `
            }
        ).join("")
    }

}

export default NoteListComponent