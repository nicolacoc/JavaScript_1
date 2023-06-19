export class Person {
    constructor(name, age, city = "") {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}



export const persons = {
    list: [
        new Person("klaus", 40),
        new Person("Walther", 45, "Hamburg"),
        new Person("Susi", 39, "Hamburg"),
        new Person("Antonio", 20, "Milano"),
    ],

    addItemToList: function (item) {
        this.list.push(item);
        document.dispatchEvent(new Event("updateList"));
    },

    Birthday: function (index) {
        if (index.length > 0) {
            this.list
                .filter(p => p instanceof Person)
                .sort((a, b) => a.age - b.age)
                [index].age++;
            document.dispatchEvent(new Event("updateList"));
        }
    },
    GetList: function(){
        return [...this.list]
    }

}
