// The map method uses a function to map an array onto an output array
// in which the same function is performed on each array member.
let ary = [1, 2, 3, 4, 5];
let double = ary.map(num => num * 2);
console.log(double);

// Here is an example that extracts details from an array of objects
let students = [
    {
        id: 123,
        name: "Arthur",
        age: 24,
        subject: "science"
    },
    {
        id: 246,
        name: "Harold",
        age: 28,
        subject: "biophysics"
    },
    {
        id: 945,
        name: "Josiah",
        age: 17,
        subject: "english"
    },
    {
        id: 402,
        name: "Wilson",
        age: 22,
        subject: "politics"
    }
]

// Get id and age - note that the single line function can be enclosed in ()
let ages = students.map(obj => ({id: obj.id, age: obj.age}));
console.log(ages);

// The filter method uses the function passed to it to select elements from
// the associated array, to create array. The function must return a value
// of true or false.

// Filter out all students < age 21
let youngsters = students.filter(student => student.age < 21);
console.log(youngsters);

// The reduce method uses the function passed to it to tally a single result 
// from the associated array.
let factors = [1, 2, 3, 4];
let fact = factors.reduce((acc, curr) => acc * curr);
console.log(fact);

// We can set the initial value to be the parameter after the function
let fact2 = factors.reduce((acc, curr) => acc * curr, 2);
console.log(fact2);

// We can perform more complex data reworking functions with reduce
// In the following consider how to extract the total number of
// years of experience as an object by profession from the following.

let keyWorkers = [
    {
        name: "Arthur",
        profession: "sales-manager",
        yrsExperience: 3
    },
    {
        name: "Harold",
        profession: "sales-manager",
        yrsExperience: 4
    },
    {
        name: "Missy",
        profession: "business-manager",
        yrsExperience: 4
    },
    {
        name: "Jonas",
        profession: "business-manager",
        yrsExperience: 2
    },
];

// Note that we set the initial value of the accumulator to an empty object
let experienceObj = keyWorkers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    }
    else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});

console.log(experienceObj);