var person = {
    firstName: "Default", 
    lastName: "Default",
    getFullName: function() {
        return this.firstName + " " +this.lastName;
    }
};

// DONT do this
var anwesha = {
    firstName: "Anwesha",
    lastName: "Chatterjee"
};

var tim = {
    firstName: "Tim"
}
anwesha.__proto__ = person;
console.log(anwesha.getFullName());
console.log(anwesha.firstName, anwesha.lastName);

console.log("-----------------------------------")

tim.__proto__ = person;
console.log(tim.getFullName());
console.log(tim.firstName, tim.lastName);