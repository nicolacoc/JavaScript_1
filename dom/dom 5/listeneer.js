import {persons, Person} from "./persons.js";

export function CreateFormFunction(e){
    e.preventDefault();
    e.stopPropagation();
    const form = e.target;
    const age = form.elements[1].value;
    const name = form.elements[0].value;
    const city = form.elements[2].value;
    // persons.push(new Person(name, age, city));
    persons.addItemToList(new Person(name, age, city))
    form.reset();
}

export function BirthdayFunction(e){
    e.preventDefault();
    e.stopPropagation();
    const form = e.target;
    const SelectedPersons = form.elements[0].value;
    persons.Birthday(SelectedPersons);
    form.reset();
}