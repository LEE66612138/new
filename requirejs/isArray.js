define(function () {
    function isArray(arr) {
        if (arr instanceof Array && arr.constructor === Array) {
            return true;
        } else {
            return false;
        }
    }
    return isArray;
});