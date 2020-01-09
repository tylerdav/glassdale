import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js"
import { getCriminalsByCrime } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    eventHub.addEventListener("showNoteButtonClicked", event => {
        render([])
    })

    // What should happen when detective selects a crime?
    eventHub.addEventListener("filterClicked", event => {
        const crimeName = event.detail.crime
        const officerName = event.detail.officer

        const filteredCriminals = appStateCriminals.filter(
            (individualCriminal) => {
                if (individualCriminal.conviction === crimeName) {
                    return individualCriminal
                }
            }
        )
        .filter(criminal => {
            if (criminal.arrestingOfficer === officerName) {
                return criminal
            }
        })

        render(filteredCriminals)
    })


    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("associates--")) {

            const [prefix, id] = clickEvent.target.id.split("--")

            const message = new CustomEvent("associateButtonClicked", {
                detail: {
                    criminalId: id
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    // Function that handles rendering of the HTML representation of the application state
    const render = criminals => {
        contentTarget.innerHTML = `
            <article class="criminalComponent">
                <div class="criminals">
                    ${
                        criminals.map(currentCriminalObject => {
                            const criminalHTML = Criminal(currentCriminalObject)
                            return criminalHTML
                        }).join("")
                    }
                </div>
            </article>
        `
    }

    render(appStateCriminals)
}

export default CriminalList
