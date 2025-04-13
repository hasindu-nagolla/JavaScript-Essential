// Constructor function for creating a Programmer object before ES6

// function Programmer(name, prefferedLanguage) {
//     this.name = name;
//     this.preferredLanguage = preferredLanguage;

//     this.code = function() {
//         console.log(`${this.name} is coding in ${this.preferredLanguage}`);
//     }
// }

// using modern ES6 class syntax to create a Programmer class

class Programmer{
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code(){
        console.log(`${this.name} is coding in ${this.preferredLanguage}`);
    }

}

const programmer = new Programmer('Hasindu', 'JavaScript');
programmer.code(); 