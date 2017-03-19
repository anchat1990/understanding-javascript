// by value

var a = 3;
var b;
b = 3;

// by reference 

var c = {greeting: 'hi'};
var d = c;

function changeGreeting(greet){
    greet.greeting = "hola";
}
changeGreeting(d)
console.log(d)

console.log(c)
c = {greeting: 'howdy'};

console.log(c)
