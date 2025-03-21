function Programmer(name, preferredLanguage){
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    // public method
    this.writeCode = function () {
        console.log("Writing code in " + this.preferredLanguage);
    }

    // private method
    const drinkCoffee = function () {
        console.log(`Drinking coffee ${this.name}`);
    }.bind(this); // .bind(this) is used to bind the constructor's context to the private method

    // public method
    this.takeBreak = function () {
        drinkCoffee();
    }
}

const programmer = new Programmer("hasii", "JavaScript");
programmer.writeCode(); // Writing code in JavaScript
// programmer.drinkCoffee(); // TypeError: programmer.drinkCoffee is not a function
programmer.takeBreak(); // Drinking coffee
