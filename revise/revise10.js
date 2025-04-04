//Importing named export
import { add, subtract } from './math.js';
console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2

import { add as sum } from './math.js';
console.log(sum(5, 3));  // Output: 8

import * as math from './math.js';
console.log(math.add(5, 3));  // Output: 8
console.log(math.subtract(5, 3));  // Output: 2

//Default Export
//Note : don’t need curly braces {} when importing
import greet from './greet.js';
console.log(greet('John'));  // Output: Hello, John!


