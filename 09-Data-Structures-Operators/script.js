'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(numberCategoria, startMenu, endMenu) {
    return [this.categories[numberCategoria- 1], this.starterMenu[startMenu - 1], this.mainMenu[endMenu - 1]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// console.log(restaurant)
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(arr[0], arr[1], arr[2]);

// Destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


let [first, , second] = restaurant.categories;
console.log("first: ", first);
console.log("second: ", second);


// old method to switching variables
// const temp = first;
// first = second;
// second = temp;
//
// console.log("first: ", first);
// console.log("second: ", second);

// we can do the same but using this method
[first, second] = [second, first];
console.log("\nfirst: ", first);
console.log("second: ", second);

// Desctructuring a function
const [categoria, primerPlato, segundoPlato] = restaurant.order(1, 4, 2);
console.log("\ncategoria: ", categoria);
console.log("primer plato: ", primerPlato);
console.log("segundo plato: ", segundoPlato);

// Arrays nested destructuring
const nested = [2, 4, [5, 6]];
const [ , , [terceroUno, terceroDos]] = nested;
console.log("Tercero Uno: ", terceroUno);
console.log("Tercero Dos: ", terceroDos);


// Default values
const [p, q, r = 0] = [8, 9];
console.log(p, q, r);