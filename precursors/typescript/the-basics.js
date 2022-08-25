"use strict";
// A static typechecker. A variable, once declared, cannot change
// its type.
// you run this using: tsc the-basics.ts
// TS only has a role during compilation. There is no typescript at run-time
// - it's NOT a language. It's only javascript, output by the TS compiler. As
// you can see in this folder - the compiler produces the-basics.js, that WILL 
// run, of course. 
// The purpose of TS is to help you detect bugs at compile-time.
var x = 'Hello, wurrld!';
// x = 42; // this causes an error
console.log(x);
var square = function (num) { return num * num; };
// console.log(square()); // NaN in js; compilation error in ts.
// TS will infer data types where it can; otherwise they must be specified
// explicitly.
// So; let x = 'Hello' means that x can be inferred to be a string.
// const nums = [1,2,3] means it's inferred to be an array of numbers.
// But suppose we write a function thus:
var circ = function (radius) { return 2 * Math.PI * radius; };
// It can't directly infer the type of 'radius'. Instead, it assumes that
// it's of type 'any'. That's bad.
