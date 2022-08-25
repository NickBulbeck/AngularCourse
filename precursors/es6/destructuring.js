// The assigning of array elements or object properties, to variables.

const nums = [1,2,3];
const nobj = {
    x: 1,
    y: 2
};

// ES5
var n01 = nums[0];
var n02 = nums[1];
var n03 = nums[2];

var x0 = nobj.x;
var y0 = nobj.y;

// ES6

const [n1,n2,n3] = nums;
// We're assuming nobj as properties named x and y.
const {x,y} = nobj;

// Often used in writing function parameters.
// Consider:
function processClient0(client) {
    // ToDo;
}
// problem with that is that there's no way of telling what datatypes
// client should contain. Now:
function processClient({name,email,active,limit=0}) {
    //ToDo;
    // You can now reference name, email and active 
    // rather than having to use client.name, client.email
    // etc
    // If your client does not have a limit property, the
    // default value of 0 is applied.
    // There's more that you can do, but this'll dae fer the noo.
}
// This function expects a nobject with specific properties.
const client = {
    name:'Smith',
    email:'joe.smith@gmail.com',
    active:true
}
processClient(client)