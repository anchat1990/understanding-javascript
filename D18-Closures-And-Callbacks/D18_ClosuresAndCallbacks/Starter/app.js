function sayHiLater() {
    var greeting = "hi";
    setTimeout(function() {
        console.log(greeting);
    }, 3000)
}
sayHiLater();

function tellMeWhendone(callback) {
    //some work
    callback();
}

tellMeWhendone(function() {
    console.log("I am done!");
    alert("I am done!");
});
tellMeWhendone(function() {
    console.log("all done!");
});