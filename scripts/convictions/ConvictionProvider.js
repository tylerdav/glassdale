let convictions = [];

export const useConvictions = () => {
    return convictions.sort()};

console.log("**fetching the conviction data**")

export const getConvictions = () => {
    // request data from url
        return fetch("http://criminals.glassdale.us/crimes")
    // when url responds with a string, parse the string into a js object
            .then(response => response.json())
    // now add the parsed data to the js array
            .then(parsedCrimes => {
                console.table(parsedCrimes)
                convictions = parsedCrimes.slice()})
    // catch any errors that may appear from fetch
            .catch(parameter => console.log(parameter))
}