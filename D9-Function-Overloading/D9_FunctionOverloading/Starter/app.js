function greet(firstname, lastname, language) {
    language = language || "en";
    if (language === 'en') console.log("hello " + firstname + " " + lastname)
    if (language = language || "es") console.log("hola " + firstname + " " + lastname)        
}

greet('anwesha', "c", "es")