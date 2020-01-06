import { usewitnesses } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessContainer")


const witnessComponent = () => {

    eventHub.addEventListener("witnessButtonClicked", event => {
        const witnesses = usewitnesses()

        const foundWitness = witnesses.find(
            (singleWitness) => {
                return singleWitness.id === parseInt(event.detail.witnessId, 10)
            }
        )

        const witnessesHTML = foundWitness.known_witnesses.map(
            (singleWitness) => {
                return `
                    <div>
                        ${singleWitness.name}: ${singleWitness.alibi}
                    </div>
                `
            }
        ).join("") 

        document.querySelector(".witness__text").innerHTML = witnessesHTML
        document.querySelector(".witnesses").showModal()

    })


    const render = () => {
        contentTarget.innerHTML = `
            <dialog class="witnesses">
                <div class="witness__text"></div>
                <button id="closeDialog">close</button>
            </dialog>
        `
    }

    render()
}

export default witnessComponent
