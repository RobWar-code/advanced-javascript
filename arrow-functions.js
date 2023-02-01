/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function sumit(a, b) {
    return a + b;
}
console.log(sumit(5,6));

// Arrow Function With Parameters
const sumit_2 = (a, b) => {
    return a + b;
}
console.log(sumit_2(7,8));

// Single Line Arrow Function With Parameters
const sumit_3 = (a, b) => a + b;
console.log(sumit_3(9, 10));

// Implicit Returns
const message_it = message => console.log(message);
message_it("Hello World");

// Returning Multiple Lines and having no arguments
const lots_of_it = () => (
    "abcde \
    fghij \
    "
);
console.log(lots_of_it());