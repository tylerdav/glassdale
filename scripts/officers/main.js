import { getOfficers } from "./OfficerProvider.js";
import OfficerList from "./OfficerList.js"

getOfficers().then(
    () => OfficerList()
)