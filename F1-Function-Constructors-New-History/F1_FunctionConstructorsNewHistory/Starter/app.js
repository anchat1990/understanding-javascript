function Person(){
    console.log(this);
    this.firstName = "John";
    this.lastName = "Doe";
}

var john = new Person();
console.log(john);


var jane = new Person();
console.log(jane);