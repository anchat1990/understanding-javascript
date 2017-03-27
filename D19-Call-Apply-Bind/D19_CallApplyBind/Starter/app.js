var person = {
    first: "Anwesha",
    last: "Chatterjee",
    getFullName: function() {
        return this.first + " " + this.last;    
    }
}

var logName = function(lang1, lang2) {
    console.log("Log: ", this.getFullName())
    console.log("langs", lang1, lang2)
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
}
var logPersonName = logName.bind(person); // whatever obj gets to be this

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

(function(lang1, lang2) {
    console.log("Log: ", this.getFullName())
    console.log("langs", lang1, lang2)
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
}).apply(person, ["ge", "es"])

// ----------------------------------------------------------------------------------

var person2 = {
    first: "Tim",
    last: "Butler"
} 

console.log(person.getFullName.apply(person2))

function multiply(a,b){
    return a*b;
}

var multiplyBy2 = multiply.bind(this, 2);
console.log(multiplyBy2(4))