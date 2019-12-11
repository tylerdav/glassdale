
import { getCriminals } from "./Criminal/CriminalProvider.js"
import CriminalList from "./Criminal/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import OfficerList from "./officers/OfficerList.js"

getCriminals().then(
    () => CriminalList())

getConvictions().then(
    () => ConvictionSelect())

getOfficers().then(
    () => OfficerList()
)