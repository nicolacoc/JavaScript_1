const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold;
function ConfrontoDate(oggi, domani, ieri){
    if (oggi instanceof Date && domani instanceof Date && ieri instanceof Date){
        if (oggi < domani && oggi > ieri){
            return true;
        }else{
            return false;
        }

    }else {
        throw new Error("Dato non valido");
    }
}


describe("test", function () {
    it("E' giusto", function () {
        let oggi = new Date();
        let domani = new Date(new Date().setDate(new Date().getDate() +1));
        let ieri = new Date(new Date().setDate(new Date().getDate() -1));
        assert.strictEqual(ConfrontoDate(oggi, domani, ieri),true);
    });

    it("E' sbagliato", function () {
        let oggi = new Date();
        let domani = new Date(new Date().setDate(new Date().getDate() +1));
        let ieri = new Date(new Date().setDate(new Date().getDate() -1));
        assert.strictEqual(ConfrontoDate(ieri, domani, oggi),false);
    });
    it("Error tipo di dato non valido", function () {
        assert.throws (()=> ConfrontoDate(100, 200, 300), Error, "Dato non valido");
    });
});