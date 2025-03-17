// =====================================================================================================================
// Factory Function is a function that returns a new object. 
// It is used to create multiple similar objects without using classes or the new keyword.
// =====================================================================================================================

function createPerson(name, school) {
    return{
        name,
        school,
        goingToSchool() {
            console.log(`${this.name} is going to ${this.school}`);
        },
        doingHomeWork() {
            console.log(`${this.name} is doing homework`);
        }
    }
}

student01 = createPerson("Hasindu", "Nalanda College"); // Create a new object using the factory function
student02 = createPerson("Lakshan", "Dharmaraja College"); // Create a new object using the factory function

console.log( student01.name)
student01.goingToSchool();


