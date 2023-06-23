const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold;

 function CountLifeTime(DateBirth){
     if (DateBirth instanceof Date){
    let Date1 = new Date();
    let result = Math.floor(((((Date1 - DateBirth)/1000)/60)/60)/24);
         return result;


     }else {
         throw new Error("Dato non valido");
     }

 }


describe("test", function () {
    it("Yesterday", function () {

        let DateBirth = new Date();
        let Date1 = DateBirth.getDate();
        DateBirth.setDate(Date1 -1);
        assert.strictEqual(CountLifeTime(DateBirth),1);
    });

    it("L'altro giorno", function () {

        let DateBirth = new Date();
        let Date1 = DateBirth.getDate();
        DateBirth.setDate(Date1 -2);
        assert.strictEqual(CountLifeTime(DateBirth),2);
    });

    it("tentativo", function () {

        let DateBirth = new Date(1960,5,30);
        // let Date1 = DateBirth.getDate();
        // DateBirth.setDate(Date1 -2);
        assert.strictEqual(CountLifeTime(DateBirth),22958);
    });




    it("Error tipo di dato non valido", function () {
        assert.throws (()=> CountLifeTime(1960), Error, "Dato non valido");
    });
});