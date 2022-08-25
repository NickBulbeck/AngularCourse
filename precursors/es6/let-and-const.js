// var is officially deid, btw.

if (true) {
    var x = 1;
    const y = 2;
    let z = 3;
}

console.log(x); // You'll get 1 because var uses global scope.
console.log(y); // You'll get an error for both of these because
console.log(z); // let and const are both block-scoped.
// Also you can't re-declare the same variable with let and const. But
// you can with var. 
// A const cannot be reassigned. But constancy != immutability... so, 
// you can declare a const array, and then change the contents of the array.
