var arr = [
    1,
    false,
    { name: "Anwesha"},
    function(name) {
        return "hello " + name;
    }
]

console.log(arr[3](arr[2]["name"]))