let officers = []

export const useOfficers = () => {
    return officers
}

export const getOfficers = () => {
    return fetch("http://criminals.glassdale.us/officers")
        .then(
            // execute this function when a response is received
            response => response.json())
        .then(
            // execute this function after the data is parsed
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers.slice()
            }
        )
}
