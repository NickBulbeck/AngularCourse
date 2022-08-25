function increment(num) {
    num++;
}

var x = 1; // x is a primitive variable: a number.
increment(x);
console.log(x);
// This gives a value of 1. We're passing x by value, not reference.
// num and x are separate variables. 
// A primitive variable stores a value (roughly speaking).

function formaliseName(person) {
    person.name = 'David';
}
var p1 = {name: 'Dave'};
formaliseName(p1);
console.log(p1.name); // This will be David because a nobject is not
// a primitive; it's passed by reference. The value of p1, in other
// words, is a reference to an object. So JS still copies its value
// into the formaliseName function, but that copy is a copy of a 
// reference. Thus, it references the underlying object. 

// The primitive datatypes in JS are... number, string, boolean,
// undefined. Reference datatypes are:
// object, array, function - though arrays and functions are 
// really objects as well. (In Java, a method is not a nobject.)