var _ = requirejs('lodash')
function log(a) {
    a();
}

log(function() {
    console.log("hi!");
})