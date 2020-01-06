import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js";
import Criminal from "./Criminal.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

console.log("**this is the criminal list component**")

const CriminalList = () => {

    const appStateCriminals = useCriminals()


    eventHub.addEventListener("crimeSelected", event => {
        if ("crime" in event.detail) {

            const matchingCriminals = appStateCriminals.filter(criminal => criminal.conviction === event.detail.crime)

            render(matchingCriminals)
        }
    })


    const criminalsContainer = document.querySelector(".criminalsContainer")
    const render = criminalCollection => {
        criminalsContainer.innerHTML = `
    <section class="criminalList">

    ${criminalCollection.map(currentCriminal => {
            return Criminal(currentCriminal);
        }).join("")}
        </section>
        `
    }


    eventHub.addEventListener('officerSelected', event => {
        if ("officerName" in event.detail) {
            if (event.detail.officerName === "0") {
                render(appStateCriminals)
            } else {
                const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
                render(filteredCriminals)
            }
        }
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

    render(appStateCriminals)
}



export default CriminalList