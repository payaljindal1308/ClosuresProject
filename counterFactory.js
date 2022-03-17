module.exports = function counterFactory() {
    let counter = 10;
    return {
        increment() {
            counter++;
            return counter;
        },
        decrement(){
            counter--;
            return counter;
        }
    }
}