function greet(whattosay) {
    return function(name) {
        console.log(whattosay+ " " + name)
    }
}

greet("hello")("Anwesha");

var sayHello = greet("hello");
sayHello("Anwesha")