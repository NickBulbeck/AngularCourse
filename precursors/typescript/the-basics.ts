// A static typechecker. A variable, once declared, cannot change
// its type.
// you run this using: tsc the-basics.ts
// TS only has a role during compilation. There is no typescript at run-time
// - it's NOT a language. It's only javascript, output by the TS compiler. As
// you can see in this folder - the compiler produces the-basics.js, that WILL 
// run, of course. 
// The purpose of TS is to help you detect bugs at compile-time.
let x = 'Hello, wurrld!';
// x = 42; // this causes an error
console.log(x);

const square = num => num * num;
// console.log(square()); // NaN in js; compilation error in ts.

// TS will infer data types where it can; otherwise they must be specified
// explicitly.
// So; let x = 'Hello' means that x can be inferred to be a string.
// const nums = [1,2,3] means it's inferred to be an array of numbers.

// But suppose we write a function thus:
// const circ = radius => 2 * Math.PI * radius;
// It can't directly infer the type of 'radius'. Instead, it assumes that
// it's of type 'any'. That's bad.
// You can prevent this by tsc --strict the-basics.ts; this will thrown an 
// error. Or, you can do this:
const circCorrect = (radius: number) => 2 * Math.PI * radius;
// This specifies the type of the input parameter. The :number hingmy is a 
// type annotation; you should use this whenever TS will be unable to infer 
// the data-type.