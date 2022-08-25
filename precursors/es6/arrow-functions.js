// an arrow function is an anonymous function. 

// In es5:
var es5Circ = function(radius) {
    return 2 * Math.PI * radius;
}
// Old JavaScript could do this.
// In es6:
const es6CircV1 = (radius) => {
    return 2 * Math.PI * radius;
}
// Arrow function rules:
// 1: If there's only 1 parameter, you can omit the round brackets
// 2: If there's only 1 statement, you can omit the braces
// 3: If you omit the braces, you must also omit the return keyword
const es6CircV2 = radius => 2 * Math.PI * radius;

// Arrow functions can be used in nobjects too:
const kevin = {
    name: 'Kevin',
    sayHello: () => console.log(`Hi; I'm ${this.name}`),
    giveName: () => console.log(this.name)
}
kevin.sayHello();
kevin.giveName();