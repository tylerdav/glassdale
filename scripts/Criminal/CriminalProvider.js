console.log("****  CriminalProvider module code  ****")

let criminals = []


const setCriminals = criminalArray => criminals = criminalArray.splice(0)

export const getCriminalsByCrime = crime => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.conviction.toLowerCase() === crime.toLowerCase()) {
            return true
        }
        return false
    })
}

export const getCriminalsByOfficer = officerName => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
            return true
        }
        return false
    })
}




export const useCriminals = () => criminals
export const getCriminals = () => {
    console.log("**** I am going to fetch the data  ****")
 
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/criminals")
        .then(
            // Execute this function when a response is received
            response => response.json()
        )
        .then(
            // Execute this function after the data is parsed
            parsedCriminals => {
                console.log("**** I am 100% sure that I have the data  ****")
                criminals = parsedCriminals.slice()
            }
        )
}