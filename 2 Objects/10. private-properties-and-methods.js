function Programmer(name, preferredLanguage){
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    // public method
    this.writeCode = function () {
        console.log("Writing code in " + this.preferredLanguage);
    }

    // private method
    const drinkCoffee = function () {
        console.log("Drinking coffee");
    }

    // public method
    this.takeBreak = function () {
        drinkCoffee();
    }
}

const programmer = new Programmer("hasii", "JavaScript");