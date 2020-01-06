import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"
import { usewitnesses } from "../Witness/WitnessProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteListComponent = () => {

    eventHub.addEventListener("click", clickevent => {
        if (clickevent.target.id.startwith("deleteNote--")) {
            const [deletePrefix, noteId] = clickevent.target.id.split("--")
            deleteNote(noteId).then(
                () => {
                    const theNewNotes = useNotes()
                    render(theNewNotes)
                }
            )
        }
    })






    eventHub.addEventListener("showNoteButtonClicked", event => {
        const allTheNotes = useNotes()
        render(allTheNotes)
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
                    </section>
                `
            }
        ).join("")
    }

}

export default NoteListComponent