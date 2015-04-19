/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var result = 0;
    while(n) {
        if((n % 2) !== 0) {
            result++;
        }
        n = Math.floor(n / 2);
    }
    return result;
};