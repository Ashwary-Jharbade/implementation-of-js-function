// import hoisting from "./hoisting.js";
// import functionExpression from "./functionExpression.js";
// import myPersonalFunction  from "./namedFunction.js";
// import { unNamedFunction } from "./namedFunction.js";
// import * as func from "./namedFunction.js";
// import generatorFunction from "./generatorFunction.js";
// import anonymousFunction from "./anonymousFunction.js";
// import functionConstructor from "./functionConstructor.js";
// import { funcConstructor } from "./functionConstructor.js";
import normalVsArrowFunction from "./normalVsArrowFunction.js";

// Hoisting 
// console.log("Hoisting");
// var x = 20; // module: x = undefined
// let y = 40; // module: y = undefined, x = 20
// const z = 60; // module: z = undefined, y = 40
// console.log(x, y, z); // module: z = 60
// 20 40 60
// hoisting();

// Function expression
// console.log("Function Expression");
// functionExpression();

// Named function 
// console.log("Named function");
// namedFunction();
// unNamedFunction();

// Generator function 
// console.log("Generator function");
// generatorFunction();

// Anonymouse function 
// console.log("Anonymous Function");
// console.log(anonymousFunction(2,2));
// 4

// Function Constructor
// console.log("Function constructor");
// console.log(functionConstructor(10,20));
// 30
// console.log(funcConstructor(20,40));

// Normal vs Arrow function
normalVsArrowFunction();