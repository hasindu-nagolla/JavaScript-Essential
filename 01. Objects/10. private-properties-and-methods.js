function Programmer(name, preferredLanguage) {

    // Private property
    let privateName = name;
    // Public property
    this.preferredLanguage = preferredLanguage;

    // Public method
    this.writeCode = function () {
        console.log("Writing code in " + this.preferredLanguage);
    }

    // Private method
    let drinkCoffee = function () {
        console.log("Drinking...");
    }

    // public method that uses a closure
    this.takeBreak = function () {
        drinkCoffee();
    }
}

const programmer = new Programmer("hasii", "JavaScript");
programmer.writeCode(); // Writing code in JavaScript
programmer.takeBreak(); // Drinking...
