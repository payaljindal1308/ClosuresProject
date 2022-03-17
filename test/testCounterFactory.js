const counterFactoryObject = require('../counterFactory.js');
const counterObject = counterFactoryObject();
console.log(counterObject.increment());
console.log(counterObject.increment());
console.log(counterObject.decrement());
console.log(counterObject.decrement());