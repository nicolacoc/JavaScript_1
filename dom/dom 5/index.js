import {persons} from "./persons.js";
import {populatePersonList, PopulateOptions} from "./functions.js";
import {CreateFormFunction, BirthdayFunction} from "./listeneer.js";

populatePersonList(persons.GetList());
PopulateOptions(persons.GetList());

const personCreateForm = document.forms.item(0);
personCreateForm.addEventListener("submit", CreateFormFunction)

document.addEventListener("updateList", () => {
    populatePersonList(persons.GetList());
    PopulateOptions(persons.GetList());
})

const birthdayEvent = document.forms.item(1);
birthdayEvent.addEventListener("submit", BirthdayFunction)
