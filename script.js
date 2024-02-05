class Neck {

}

class Strings {

}

class Body {

}

class Guitar {
    constructor(neck,strings,body){
        this.neck = neck;
        this.strings = strings;
        this.body = body;
        this.isTuned = false;
        this.isFaulty = Math.random() < 0.7;
    }

    tune() {
        this.isTuned = true;
    }

    isPlayable() {
        if (
            this.neck instanceof Neck &&
            this.strings instanceof Strings &&
            this.body instanceof Body &&
            this.isTuned === true &&
            this.isFaulty === false
        ) {
            console.log("guitar is playing just fine!")
            return true;
        } else {
            console.log("The guitar is not playable!")
            return false;
        }
    }
}

class Supplier {
    constructor() {
        this.lastDeliveryDateTime = 0;
    }

    delivery() {
        let arrayLength = getRandomIntInclusive(3,6);
        const suppliesArry = []
        suppliesArry.length = arrayLength
    }
}

const neck = new Neck();

const strings = new Strings();

const body = new Body();

const guitar = new Guitar(
    neck, strings, body
)

const supplier = new(Supplier);

console.log(guitar);
guitar.tune();
console.log(guitar);
console.log(guitar.isPlayable());
console.log(supplier);
supplier.delivery();

// const someDate = new Date("2024-01-01");
// console.log(someDate.toISOString());
// console.log(someDate.getTime());
//
// // random number (from 3 to 6)
//

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
