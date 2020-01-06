let Witnesses = []

const setWitnesses = (witnessArray) => {
    Witnesses = witnessArray.splice(0)
}

export const usewitnesses = () => Witnesses

export const getWitnesses = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/witnesses", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(setWitnesses)
}
