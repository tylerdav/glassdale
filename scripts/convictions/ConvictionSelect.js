import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")


const ConvictionSelect = () => {
    const convictions = useConvictions()

    // What should this component say to the event hub, and when
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            // Make a custom event to "talk" to other components
            const selectedCrime = changeEvent.target.value

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedCrime
                }
            })

            // Dispatch it
            eventHub.dispatchEvent(message)
        }
    })




    const render = convictionsCollection => {
        contentTarget.innerHTML += `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(currentCrime => {
                        return `<option value="${currentCrime}">${currentCrime}</option>`
                    })
                }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect