# understanding-javascript
things I learnt in the udemy understanding javascript course. Notes:

javaScript engine "translates" your code.
objects have properties and methods.s
a function inside an object is called a method.
json -> properties need to be wrapped in quotes. all quotes consistent.
functions are special objects.
functions are hoisted as a whole. variables are hoisted as "undefined".

references created on functions within functions "closures"
scope always maintained
let is used for the scope of the block - for functions within functions, use let. (ES6)

closures are functions within functions. D     17.


Bind is when you send it the "this" context
apply applies , call calls. but both call with a context specified.

currying when u have a function with preset parameters using bind. 

first class functions is when functions are like object, can be passed around

new makes the function return the this object instead of undefined

prototype is not the function prototype but the prototype for any objects created using the function constructor.

function constructors should be in caps. to help differentiate against functions.

moment.js has date work methods

do not use for in for arrays, instead classic i=0; i<len; i++

put methods on the prototype to save memory space. 
Func.prototype.newMethod = function() {console.log("New Method!");};

JQUERY

DOM -> HTML rendering. 
var q = $("ul.people li");   -> jquery is inquiring the document tree for all li children in all ul elements that are class people 

new Function() is a function contructor, and ususally the function should not return anything as new returns an empty obj, bu tu can alter that empty object and send it back

.html()

semicolon on the beginning of file


Transpiled languages
For more on Typescript head to: http://www.typescriptlang.org
and try out writing Typescript code in your browser here: http://www.typescriptlang.org/Playground
For more on Traceur head to: https://github.com/google/traceur-compiler
and try out writing ES6 code in Traceur in your browser here: https://google.github.io/traceur-compiler/demo/repl.html#
Thank you!

ES6

https://github.com/lukehoban/es6features

