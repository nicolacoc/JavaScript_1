const assert = require('assert');

function converter(value, unit, TargetUnit) {
    if (isNaN(value)){
        throw new Error("Il valore non è un numero");
    }
    let risposta;
    // Divisione da mg a kg
    // Mg

    if (unit === "mg" && TargetUnit === "cg") {
         risposta =  (value / 10);
    } else if (unit === "mg" && TargetUnit === "dg") {
         risposta =  (value / 100);
    } else if (unit === "mg" && TargetUnit === "g") {
         risposta =  value / 1000;
    } else if (unit === "mg" && TargetUnit === "dag") {
         risposta =  value / 10000;
    } else if (unit === "mg" && TargetUnit === "hg") {
         risposta =  value / 100000;
    } else if (unit === "mg" && TargetUnit === "kg") {
         risposta =  value / 1000000;
    }
    // CG
    else if (unit === "cg" && TargetUnit === "dg") {
         risposta =  value / 10;
    } else if (unit === "cg" && TargetUnit === "g") {
         risposta =  value / 100;
    } else if (unit === "cg" && TargetUnit === "dag") {
         risposta =  value / 1000;
    } else if (unit === "cg" && TargetUnit === "hg") {
         risposta =  value / 10000;
    } else if (unit === "cg" && TargetUnit === "kg") {
         risposta =  value / 100000;
    } //dg

    else if (unit === "dg" && TargetUnit === "g") {
         risposta =  value / 10;
    } else if (unit === "dg" && TargetUnit === "dag") {
         risposta =  value / 100;
    } else if (unit === "dg" && TargetUnit === "hg") {
         risposta =  value / 1000;
    } else if (unit === "dg" && TargetUnit === "kg") {
         risposta =  value / 10000;
    } //g

    else if (unit === "g" && TargetUnit === "dag") {
         risposta =  value / 10;
    } else if (unit === "g" && TargetUnit === "hg") {
         risposta =  value / 100;
    } else if (unit === "g" && TargetUnit === "kg") {
         risposta =  value / 1000;
    } // dag

    else if (unit === "dag" && TargetUnit === "hg") {
         risposta =  value / 10;
    } else if (unit === "dag" && TargetUnit === "kg") {
         risposta =  value / 100;
    } // hg

    else if (unit === "hg" && TargetUnit === "kg") {
         risposta =  value / 10;
    }
        // moltiplicazione da kg a mg
    //kg
    else if (unit === "kg" && TargetUnit === "hg") {
         risposta =  value * 10;
    } else if (unit === "kg" && TargetUnit === "dag") {
         risposta =  value * 100;
    } else if (unit === "kg" && TargetUnit === "g") {
         risposta =  value * 1000;
    } else if (unit === "kg" && TargetUnit === "dg") {
         risposta =  value * 10000;
    } else if (unit === "kg" && TargetUnit === "cg") {
         risposta =  value * 100000;
    } else if (unit === "kg" && TargetUnit === "mg") {
         risposta =  value * 1000000;
    }// hg

    else if (unit === "hg" && TargetUnit === "dag") {
         risposta =  value * 10;
    } else if (unit === "hg" && TargetUnit === "g") {
         risposta =  value * 100;
    } else if (unit === "hg" && TargetUnit === "dg") {
         risposta =  value * 1000;
    } else if (unit === "hg" && TargetUnit === "cg") {
         risposta =  value * 10000;
    } else if (unit === "hg" && TargetUnit === "mg") {
         risposta =  value * 100000;
    } //dag

    else if (unit === "dag" && TargetUnit === "g") {
         risposta =  value * 10;
    } else if (unit === "dag" && TargetUnit === "dg") {
         risposta =  value * 100;
    } else if (unit === "dag" && TargetUnit === "cg") {
         risposta =  value * 1000;
    } else if (unit === "dag" && TargetUnit === "mg") {
         risposta =  value * 10000;
    } //g

    else if (unit === "g" && TargetUnit === "dg") {
         risposta =  value * 10;
    } else if (unit === "g" && TargetUnit === "cg") {
         risposta =  value * 100;
    } else if (unit === "g" && TargetUnit === "mg") {
         risposta =  value * 1000;
    } // dg

    else if (unit === "dg" && TargetUnit === "cg") {
         risposta =  value * 10;
    } else if (unit === "dg" && TargetUnit === "mg") {
         risposta =  value * 100;
    } // cg

    else if (unit === "cg" && TargetUnit === "mg") {
         risposta =  value * 10;
    }

    // errore
    else {
        throw new Error("Operazione non possibile");
    }

    // risultato
       return [risposta, TargetUnit];


    }

    // let result = converter(10, "g", "kg")
    // console.log(result);

describe("test", function () {
    it("da 10 g a kg", function () {
        let result = converter(10, "g", "kg");
        assert.strictEqual(result[0],0.01);
    });
    it("da 10 kg a g", function () {
        let result = converter(10, "kg", "g");
        assert.strictEqual(result[0],10000);
    });
    it("Error non è un numero", function () {
        assert.throws (()=> converter("aa", "kg", "g"), Error, "Il valore non è un numero");
    });
    it("Operazione non valida", function () {
        assert.throws (()=> converter(10, "aaa", "aaa"), Error, "Operazione non possibile");
    });
});