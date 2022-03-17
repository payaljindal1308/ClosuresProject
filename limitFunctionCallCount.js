module.exports = function limitfunctionCall(cb, n){
    let count = n;
    function returningFunction(){
        if (count){
        count-=1;
        return cb();
        }
        return null;
    }
    return returningFunction;
}
