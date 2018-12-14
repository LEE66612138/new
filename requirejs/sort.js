define(['isArray'], function (isArray) {
    function sort(arr) {
        // console.log(isArray(arr))
        if(isArray(arr)){
            return arr.sort(function (a, b) {
                return a - b;
            });
        }else{
            return '不是数组';
        }
    }
    return sort;
});