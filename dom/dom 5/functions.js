
import {Person} from "./persons.js";
export function populatePersonList(persons) {
    if (persons instanceof Array) {
        let sel = document.getElementById("persons-list");

        /*sel.innerHTML="";
        persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .forEach((array) => {
                    let liElement = document.createElement("li");
                    liElement.setAttribute("class", "list-group-item d-flex")
                    sel.append(liElement);
                    let div1 = document.createElement("div");
                    div1.innerHTML = array.name + (array.city.length <= 0) ? "" : " (" + array.city + ")";
                    liElement.append(div1);
                    let div2 = document.createElement("div");
                    div2.setAttribute("class", "ms-auto");
                    div2.innerHTML = array.age + " years old";
                    liElement.append(div2);

            })*/

        function toListItem({name, city, age}) {
            return `<li class="list-group-item d-flex">
                             <div>${name} ${(city) ? `(${city})` : ''}</div>
                             <div class="ms-auto">${age} years old</div>
                            </li>`;
        }

        sel.innerHTML = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map(toListItem)
            .join("");
    }

}

export function PopulateOptions(persons) {
    if (persons instanceof Array) {
        let Select = document.forms.item(1).elements[0];
        let firstOption = [Select.children[0]];
        Select.innerHTML = "";
        let newPersons = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map((array, index) => new Option(array.name, index.toString()));


        let x = firstOption.concat(newPersons);
        x.forEach((i) => {
            Select.append(i);
        })


    }
}
