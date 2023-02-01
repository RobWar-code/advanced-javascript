// Conventionally, in order to assign array element values or object values to
// variables, it is necessary to use array subscripting or object key expressions
// to get the values individually.
// Destructuring allows this to happen on a single line.
// Destructuring an array:
let ages = [10, 12, 13, 14];
var [fred, jim, james, martha] = ages;
console.log(fred, jim, james, martha);

// We can extract parts of the array by including commas for elements to skip:
var [fred, ,martha] = ages;
console.log(fred, martha);

// We can assign skipped elements to an array
[johannes, bert, ...remainder] = ages;
console.log(johannes, bert, remainder);

// Similarly with objects, we can destructure by using variable names
// that match the property names in the object
let languages = {
    harold: "french",
    hetty: "german",
    robert: "spanish",
    thomas: "chinese"
}
// Destructure subset
var {harold, thomas} = languages;
console.log(harold, thomas);

var {harold, robert} = languages;
console.log(harold, robert);

// Assign remainder
let yummies = {
    martine: "pizza",
    marilyn: "pistachios",
    josephine: "marmalade",
    andrea: "oranges"
}
let {martine, marilyn, ...otherOnes} = yummies;
console.log(martine, marilyn, otherOnes);