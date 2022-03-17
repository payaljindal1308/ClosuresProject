module.exports = function cacheFunction(cb) {
    const cacheObject = {
        firstNameTracker : [],
        lastNameTracker : []
    }
    function returningFunction(firstNameParam, lastNameParam){
        if(cacheObject.firstNameTracker.includes(firstNameParam) && cacheObject.lastNameTracker.includes(lastNameParam)){
            return [firstNameParam, lastNameParam];
        }
        cacheObject.firstNameTracker.push(firstNameParam);
        cacheObject.lastNameTracker.push(lastNameParam);
        return cb();
    }
    return returningFunction;
}
