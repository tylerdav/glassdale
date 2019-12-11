import { useCriminals } from "./CriminalProvider.js";
import Criminal from "./Criminal.js";

const eventHub = document.querySelector(".container")
// const contentElement = document.querySelector(".criminalContainer");

// console.log("**this is the criminal list component**")


const CriminalList = () => {

    const appStateCriminals = useCriminals();

    eventHub.addEventListener("crimeSelected", event => {
        if("crime" in event.detail) {

            const matchingCriminals = appStateCriminals.filter(criminal => criminal.conviction === event.detail.crime)

            render(matchingCriminals)
        }
    }
    )
const criminalsContainer = document.querySelector(".criminalsContainer")
const render = criminalCollection => {
    criminalsContainer.innerHTML = `
    <section class="criminalList">

    ${criminalCollection.map(currentCriminal => {
                return Criminal(currentCriminal);
            })
            .join("")}
            </section>
            `
}
render(appStateCriminals)
}
export default CriminalList