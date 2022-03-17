let limitFunction = require('../limitFunctionCallCount.js');

let limitFunctionObject = limitFunction(cb = () =>{ return "Call back funtion called"}, 5);
console.log(limitFunctionObject());
console.log(limitFunctionObject());
console.log(limitFunctionObject());
console.log(limitFunctionObject());
console.log(limitFunctionObject());
console.log(limitFunctionObject());
console.log(limitFunctionObject());

