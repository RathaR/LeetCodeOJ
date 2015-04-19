/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var getNext = function(input) {
        var input = input.split('');
        var result = '';
        while(input.length) {
            var index = 0, currentNumber = input[0];
            while(input[index] == currentNumber) {
                index++;
            }
            result += index + currentNumber;
            input.splice(0, index);
        }
        return result;
    };

    var i, currentString = null;
    if(n == 1) {
        return '1';
    }
    for(i = 1; i < n; i++) {
        if(i === 1) {
            currentString = '1';
        }
        currentString = getNext(currentString);
    }
    return currentString;
};