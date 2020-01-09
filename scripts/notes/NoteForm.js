import { saveNote, getNotes, useNotes, editNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")


const NoteFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.noteId

        const allNotesArray = useNotes()

        const theFoundedNote = allNotesArray.find(
            (currentNoteObject) => {
                return currentNoteObject.id === parseInt(noteToBeEdited, 10)
            }
        )

        document.querySelector("#note-id").value = theFoundedNote.id
        document.querySelector("#note-text").value = theFoundedNote.text
        document.querySelector("#note-criminal").value = theFoundedNote.suspect
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#note-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedNote = {
                    id: parseInt(document.querySelector("#note-id").value, 10),
                    text: document.querySelector("#note-text").value,
                    suspect: document.querySelector("#note-criminal").value,
                    date: Date.now()
                }

                editNote(editedNote).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newNote = {
                    text: document.querySelector("#note-text").value,
                    suspect: document.querySelector("#note-criminal").value,
                    date: Date.now()
                }

                saveNote(newNote).then(
                    () => {
                        const message = new CustomEvent("noteCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showNotes") {
            const message = new CustomEvent("showNoteButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `

                <input type="hidden" id="note-id" />

                <div class="note__field">
                    Note: <input type="text" id="note-text" />
                </div>

                <div class="note__field">
                    Criminal: <input type="text" id="note-criminal" />
                </div>

                <button class="note__field" id="saveNote">Save Note</button>
                <button class="note__field" id="showNotes">Show Notes</button>
                
        `
    }

    render()
}

export default NoteFormComponent
