// is used primarily to make (shallow) copies

const nums = [1,2,3];
const newNums = [...nums];
// ... is the spread operator; it unpacks the existing array in a new one.
// NOTE:
// If it's an array of objects, you're copying references.
const folk = [
    {name: 'Tom'},
    {name: 'Dick'},
    {name: 'Harry'}
]

const newFolk = [...folk];
// this is copying references. Which means that if you mutate Tom in
// newFolk, you'll also mutate him in folk. nums is an array of primitives,
// so you wouldn't have the same problem; but be wary of this.

// you can also extend:
const extendedNums = [...nums,4,5,6];
const coords = {x:13,y:7};
const newCoords = {...coords};
const threeD = {...coords,z:9};
console.log(threeD.z);