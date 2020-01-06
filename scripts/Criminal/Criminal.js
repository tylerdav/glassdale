console.log("****  Criminal module code  ****")
const Criminal = (criminal) => {
    console.log("**** this am the item component  ****")
    return `
        <section class="criminal">
            <header class="criminal__header">
               ${criminal.name}
            </header>
            <div>Age: ${criminal.age}</div>
            <div>
                Crime: ${criminal.conviction}
            </div>
            <div>
                Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
            </div>
            <div>
                Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
            </div>
            <button id="associates--${criminal.id}">Associate Alibis</button>
            <button id="Witnesses--${criminal.id}">Witnesses</button>
        </section>
    `
}
export default Criminal