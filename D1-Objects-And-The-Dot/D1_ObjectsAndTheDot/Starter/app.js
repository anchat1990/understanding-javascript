var person = {};
person["firstName"] = "anwesha";
person["lastname"] = "chatterjee";
var firstNameProp = "firstName";
//console.log(person.firstName);
//console.log(person);
//console.log(person[firstNameProp]);
function greet(person) {
    console.log("Hi", person.firstName)
}
greet({
    firstName: "anwesha", 
    lastName: "chatterjee"
})