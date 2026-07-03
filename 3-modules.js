// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const { john, peter } = require("./4-names"); // OBJECT DESTRUCTURING
const sayHi = require("./5-utils");

sayHi('susan');
sayHi(names.peter);
sayHi(john);

// console.log(names.john);

// sayHi(john);
