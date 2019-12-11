import { saveNote, getNotes } from "./NoteProvider"




eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
            const newNote = {

                // Key/value pairs here
                text: document.querySelector("note-text").value,

                suspect: document.querySelector("note-criminal").value,

                date: date.now()
        }
        saveNote(newNote)
    }
})

evetnHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const message = new CustomEvent("showNoteButtonClicked")
        eventHub.dispatchEvent(message)
    }
})

const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `

            <button id="saveNote">Save Note</button>
            <div class="note__field">
            <input class="user__notes">
                <section type="text" class="note-text"></section>
                <section type="text" class="note-criminal"></section>
                <section type="date" class="date"></section>
            </input>
        </div>
        `
    }

    render()
}

export default NoteFormComponent