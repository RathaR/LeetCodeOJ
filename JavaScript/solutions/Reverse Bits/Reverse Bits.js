/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var powers = [], result = 0;
    while(n) {
        powers.unshift(n % 2);
        n = n >>> 1;
    }
    while(powers.length!== 32) {
        powers.unshift(0);
    }
    for(var index = 0; index < powers.length; index++ ) {
        result = result + powers[index] * Math.pow(2, index)
    }
    // console.log(powers);
    return result;
};