var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)){   
        console.log(prop+": "+john[prop]);
    }
}

var jane = {
    address: "111 main street",
    getFormalFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
    
}

var jim= {
    getFirstName: function() {
        return this.firstname;
    }
}

_.extend(john, jane, jim);
console.log(john);



