// In the general case when we pass more parameters to a function
// than are defined for the function, the residual parameters are ignored:
const sumit = (a, b) => {
    return a + b;
}
let total = sumit(1, 2, 3, 4);
console.log(total);
// If our intention is to use the parameters beyond those defined, we
// can use the rest parameters, which creates an array from the additional
// parameters passed
const sumit_2 = (a, b, ...rest) => {
    let total = a + b;
    for (n of rest) {
        total += n;
    }
    return total;
}
let total2 = sumit_2(1,2,3,4,5);
console.log(total2);