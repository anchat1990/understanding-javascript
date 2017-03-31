console.log(_.all([true, true]));
var arr = [1, 2, 3];
var arr2 = [];
for (i=0; i<arr.length; i++){
    arr2.push(arr[i]*2);
}
//console.log(arr2)

function mapForEach(arr, fn) {
    newArr = [];
    for (i=0; i<arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;  
}

//arr3 = mapForEach(arr, function(a) { return a*2; });
arr3 = mapForEach(arr, function(a) { return a<2; });
//console.log(arr3)

function checkForLimit(limit, a) {
    return a > limit;
}
function testFunc(limit) {
    return checkForLimit.bind(this, limit);
}

//arr4 = mapForEach(arr, checkForLimit.bind(this, 1))
arr4 = mapForEach(arr, testFunc(1));
//console.log(arr4);

arr5 = _.map(arr, function(a) {return a*3;});
//console.log(arr5);

arr6 = _.filter([1,2,3,4,5,6,7,8,9,10], function(a){return a % 2 ===0;});
console.log(arr6);