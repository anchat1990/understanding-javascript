"use strict";
(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
         return new Greetr.init(firstName, lastName, language);
    };
    
    var supportedLangs = ["en", "ge", "es"];
    
    var greetings = {
        en: "Hello",
        es: "Hola",
        ge: "Hallo"
    };
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos",
        ge: "Guten Tag"
    };
    
    var logging = {
        en: "Logged in",
        es: "registrado en",
        ge: "eingeloggt"
    };
    Greetr.prototype = {
        fullName: function() {
            return this.firstname + " " + this.lastname;
        },
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1)
                throw "Invalid Language";
        },
        greeting: function() {
            return greetings[this.language] + " " + this.firstname;
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + " " + this.fullName();
        },
        greet: function(formal) {
            var msg;
            if (formal) msg = this.formalGreeting();
            else msg = this.greeting();
            if (console) console.log(msg);
            return this;
        },
        log: function() {
            if (console) {
                console.log(logging[this.language] + ":" + this.fullName());
            }
            return this;    
        },
        setLanguage: function(language) {
            this.language = language;
            this.validate();
            return this;
        }
        
    };
    
    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "en";
    };
    
    //Point the prototype chain to where the prototype is
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    return Greetr;
}(window, jQuery));