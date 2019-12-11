import { getNotes } from "./NoteProvider"


const contentTarget = documnet.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteListComponent = () => {
    eventHub.addEventListener("showNoteButtonClicked", event => {
        getNotes().then(
            () => contentTarget()
        )
    })
}