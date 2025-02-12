'use strict';
/*
function calcAge(birthYear) {
    const age = 2025 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = "Martin";

            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3)); // esto funciona solo en el modo NO estrico
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = "Jorge";

calcAge(1996);

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jorge";
let job = "Student";
const year = 1997;

console.log(job);
console.log(year);

// Functions
console.log(addDecl(2, 5));
// console.log(addExpr(2, 7));
console.log(addArrow);
// console.log(addArrow(2, 7));

function addDecl(a, b){
    return a + b;
}

const addExpr = function(a, b){
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log("---Example---")
console.log(numProducts);
if(!numProducts) {
    console.log(!numProducts);
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted");
}

// console.log(this);

const calcAge = function(birthYear) {
    console.log(2025 - birthYear);
    console.log(this);
};

calcAge(1997);

const calcAgeArr = (birthYear) => {
    console.log(2025 - birthYear);
    console.log(this);
};

calcAgeArr(2000);

const jorge = {
    year: 1997,
    currentYear: 2025,
    calcAge: function() {
        console.log(this);
        console.log(this.currentYear - this.year);
    }
}

jorge.calcAge();

const matilda = {
    year: 2000,
};

matilda.currentYear = jorge.currentYear;
matilda.calcAge = jorge.calcAge;
matilda.calcAge();

const g = jorge.calcAge;
g();

const jorge = {
    firstName: 'Jorge',
    year: 1997,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);

        // -- Old Solution --
        const self = this;
        const isMillenial = function(){
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial();


        //-- Modern Solution --
        // const isMillenial = () => {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // }
        // isMillenial();


    },
    greet: () => console.log(`Hey ${this.firstName}`),
}

jorge.greet();
jorge.calcAge();

// argument keyword

const addExpr = function(a, b){
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 10, 15);

var addArrow = (a, b) => {
    // console.log(arguments);
    return a + b;
}
addArrow(2, 5);

 */

// object References in Practice(Shallow vs. Deep Copies)


/*
const jessica1 = {
    firtName: "Jessica",
    lastName:"Williams",
    age: 27,
}

function marryPerson(originalPerson, newLastName){
    originalPerson.lastName = newLastName;
    return originalPerson;
}


const marriedJessica = marryPerson(jessica1, "Davis");

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

console.log("Before: ", jessica1);
console.log("After: ", marriedJessica);


// it's important to remember that a shallow copy is not completely independent from
// the original object if the values are objecst or arrays, as the references are shared.
const jessica2 = {
    firtName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
}

// a brand new object has been created in the heap
// but this is a shallow copy


// A shallow copy only correctly copies primitive values and creates a new object
// in the heap with them, but if there are objects or arrays (which are also objects)
// as values for a key, the shallow copy will only copy the references of these.

const jessica2Copy = {...jessica2};

jessica2Copy.lastName = "Agata";
jessica2Copy.family.push("Martin");
jessica2Copy.family.push("Pablo");


// Here we can see how the creation or copy is at the first level...
// because when modifying the "familia" array, it is altered because
// it is an object, which means that "familia" stores a reference, and
// that's why we can modify it from the new copy.
console.log("Before: ", jessica2);
console.log("After: ", jessica2Copy);

// Deep copy
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push("Steven");
jessicaClone.family.push("Jhostin");

console.log("Before clone: ", jessica2);
console.log("After clone: ", jessicaClone);

 */

//How is memory space released in JavaScript?
// When it comes to primitive variable types, it's very simple because the variables
// will be deleted when the execution context where the variables were created
// is removed(popped off the call stack). However, the only variables that won't be deleted
// are the global ones... because the global execution context is never removed—well, it is,
// but only when the program is no longer in use.

// Garbage Collection
// In the context of JavaScript's Garbage Collector (GC), roots are the initial
// references from which the JavaScript engine starts searching and marking objects
// that are "alive" or "reachable" in memory.

// What is considered a root in JavaScript?
    // window (in the browser) or global (in Node.js):

// The global object is always accessible and, therefore, is a root.
    // Example: window.document, window.location.
    // Local variables in the current execution context:

    // Variables that are in the scope of an active function or in the call stack.
    // Callbacks and closures:

    // Functions waiting to be executed (e.g., in a setTimeout or an eventListener).
// Prototype chains:
    // Links to prototypes are also considered roots since they allow access to inherited
    // properties.
    // How does it work in the Mark and Sweep algorithm?
    // Mark:

    // The GC starts from the roots and marks all objects reachable from them.
    // If an object is directly or indirectly accessible from a root, it is marked as "alive."
// Sweep:
    // The GC then goes through the entire memory.
    // Any object that is not marked is considered unreachable and is therefore deleted
    // to free up space.






