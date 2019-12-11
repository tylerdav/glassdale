import { useConvictions } from "./ConvictionProvider.js";

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {

  const convictions = useConvictions()


  const render = convictionsCollection => {
    contentTarget.innerHTML += `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(crime => `<option id=selected${crime}>${crime}</option>`)}
    </select>`
  }
  render(convictions)

  // ​what should this component say to the hub, and when
  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropdown")) {

      // make a custom event to "talk" to other components

      const selectConvictions = changeEvent.target.value


      const crime = new CustomEvent("crimeSelected", {
        detail: {
          crime: selectConvictions
        }
      });
      eventHub.dispatchEvent(crime);
    }
  });
}

export default ConvictionSelect