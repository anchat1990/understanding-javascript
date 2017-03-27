function createFunctions() {
    arr = [];
    for (i=0; i<3; i++) {
        console.log("outside", i)
        let j  = i;
        arr.push(function() {
            console.log(j);   
        })
    }
    return arr;
}
function createFunctions2() {
    arr = [];
    for (i=0; i<3; i++) {
        arr.push(function(j) {
            return function() {
                console.log(j);   
            }
        }(i))
    }
    return arr;
}
var functions = createFunctions2();
functions[0]()
functions[1]()
functions[2]()