var person = {
    firstName: "Default",
    lastName: "Default",
    greet: function() {
        return "Hi "+ this.firstName
    }
}

var john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";
console.log(john)
console.log(john.greet())