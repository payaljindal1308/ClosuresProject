
let cacheFunctionObject = require('../cacheFunction.js');
cacheFunctionInstance = cacheFunctionObject(cb = () => { return "Call back function called"});
console.log(cacheFunctionInstance('Payal', 'Jindal'));
console.log(cacheFunctionInstance('Payal', 'Jindal'));
console.log(cacheFunctionInstance('John', 'Kane'));
console.log(cacheFunctionInstance('John', 'Kane'));

