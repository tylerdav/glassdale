
import { getCriminals } from "./Criminal/CriminalProvider.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { getNotes } from "./notes/NoteProvider.js"
import CriminalList from "./Criminal/CriminalList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import OfficerSelect from "./officers/OfficerSelect.js"
import NoteFormComponent from "./notes/NoteForm.js"
import NoteListComponent from "./notes/NotesList.js"
import DialogComponent from "./dialog/Dialog.js"

import FilterButton from "./filter/Filter.js"

const loadData = () => {
    return getConvictions()
        .then(getNotes)
        .then(getCriminals)
        .then(getOfficers)
}

const renderInitialComponents = () => {
    ConvictionSelect()
    OfficerSelect()
    FilterButton()
    NoteFormComponent()
    NoteListComponent()
    CriminalList()
    DialogComponent()

}


loadData().then(renderInitialComponents)

