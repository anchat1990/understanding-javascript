String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit; 
}
console.log("john".isLengthGreaterThan(5));

Number.prototype.isPositive = function() {
    return this > 0;
}
var a = new Number(-4);
console.log(a.isPositive());