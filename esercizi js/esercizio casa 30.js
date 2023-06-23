//1. implementa una funzione "createPerson", che prende 2 argomenti: name and age
//
// The function should RITORNA UNA person Object che consiste delle 2 proprietà,
// the object shall have a 'name' and an 'age' property.
//  Il valore di default di age è 18.
//
//  2. implementa la function "printPersons" which takes un parametro: array persone
// a) persons should be an array of person objects (from step 1) // verificate che sia un array
//
//  b) La funzione deve stampare should print all persons from the array persons "nicely" as a formatted string
//  "Person is called XXX and is YYY years old".
// You can use the console.log() function for this.
//
// 3. call the function with an array of 2person objects that you created with createPerson

// ##################################################################################################

//
// 4. extend printPersons with a second - optional - parameter, "formatName".
// - formatName should be a function that expects a string and returns a string.
//


function createPerson(name, age = 18) {
    if (typeof name === "string" && typeof age === "number" && typeof name !== "undefined" && typeof age !== "undefined") {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        return new Person(name, age);

    } else {
        throw new Error("Tipo dati errato");
    }
}

function printPersons(array_persone, externalFormatter) {
    if (Array.isArray(array_persone)) {

        let f = externalFormatter === undefined ?
            (element) => ("La persona si chiama " + element.name + " e ha " + element.age + " anni")+"\n" :
            (element) => externalFormatter(element.name, element.age)+"\n";


        return array_persone
            .map(f)
            .reduce((current, prev) => current + prev);
    } else {
        throw new Error("Non contiene array");
    }
}

console.log(printPersons([createPerson("gina"), createPerson("Matteo", 50)]))

let Formatter= (name, age) => name+" is "+age+" years old";

console.log(printPersons([createPerson("gina"), createPerson("Matteo", 50)], Formatter))