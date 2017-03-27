function makeGreeting(language) {
    return function(first, last) {
        if (language === "es") {
            console.log("hola "+ first + " " + last);
        }
        
        if (language === "en") {
            console.log("hello "+ first + " " + last);
        }
    }
}

var greetEn = makeGreeting("en");
var greetEs = makeGreeting("es");

greetEn("Anwesha", "Chatterjee");
greetEs("Anwesha", "Chatterjee");   