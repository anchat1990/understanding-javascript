var person = [
    {
        firstName: "John",
        lastName: "Doe",
        addresses: [
            "111 Main St",
            "122 Main St"
        ]
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        addresses: [
            "111 Park st."
        ],
        greet: function() {
            return "Hi!";
        }
    }
];
console.log(person[1].greet());