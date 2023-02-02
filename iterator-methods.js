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