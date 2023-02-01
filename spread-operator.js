// Standard array assignment simply creates a reference from one array to the other
let arr1 = [1,2,3];
let arr2 = arr1;
arr2[0] = 4;
console.log(arr1);
// The spread operator creates a clone or a copy
let arr3 = [1,2,3];
let arr4 = [...arr3];
arr4[0] = 4;
console.log(arr3);
console.log(arr4);

// As for arrays using the assignment operator creates a reference
obj1 = {a: 1, b: 2, c: 3};
obj2 = obj1;
obj2["a"] = 3;
console.log(obj1);

// If we use the spread operator, we can clone the object and also add further properties
obj3 = {a: 1, b: 2, c: 3};
obj4 = {...obj3, d:4, e: 5};
console.log(obj4);
