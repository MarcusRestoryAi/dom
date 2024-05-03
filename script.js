function outputText () {
    // Hämta användarens värde
    const userInput = document.getElementById("txtName").value

    //Anropa elementet med ID output och skriv ut en text
    document.getElementById("output").innerText = `Hello ${ userInput == "" ? "World" : userInput}`
}

function createPerson () {
    // Hämta värden från inputfält
    const listOfInputs = document.getElementsByTagName("input")

    const firstName =           listOfInputs[1].value
    const lastName =            listOfInputs[2].value
    const age =       parseInt( listOfInputs[3].value )

    //Skapa ett nytt PersonObject och spara i array
    let newPerson = new Person(firstName, lastName, age)
    arrPersons.push( newPerson )

    console.log(arrPersons)

    //Lägga till en ny rad i tabell
    //Skapa en ny TR komponent
    let newRow = document.createElement("tr")

    //Skapa 3st TD komponenter
    let tdFirstName = document.createElement("td")
    let tdLastName = document.createElement("td")
    let tdAge = document.createElement("td")

    tdFirstName.innerText = newPerson.firstName
    tdLastName.innerText = newPerson.lastName
    tdAge.innerText = newPerson.age

    // Koppla TD taggar till TR tag
    newRow.appendChild(tdFirstName)
    newRow.appendChild(tdLastName)
    newRow.appendChild(tdAge)

    //Koppla den nya raden till tabellen
    document.getElementById("personTable").appendChild(newRow)
}

//Skapa en EventListener till button
document.getElementById("btnOutput").addEventListener("click", outputText)
document.getElementById("btnSubmit").addEventListener("click", createPerson)

//Skapa en tom Person-array
const arrPersons = []
