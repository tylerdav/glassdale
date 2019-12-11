import { useOfficers } from "./OfficerProvider.js"
import Officer from "./Officer.js"

const contentTarget = document.querySelector(".officersContainer")
const OfficerList = () => {
    // Load the application state to be used by this component
    const appStateOfficers = useOfficers()

    contentTarget.innerHTML = `
        <div class="officers">
            ${
                appStateOfficers.map(currentOfficerObject => {
                    const officerHTML = Officer(currentOfficerObject)
                    return officerHTML
                }).join("")
            }
        </div>
    `
    console.groupEnd()
}
export default OfficerList