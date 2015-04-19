/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var startChars = ['(', '{', '['];
    var endChars = [')', '}', ']'];
    var input = s.split('');
    var stack = [];
    while(input.length) {
        var currentChar = input.shift();
        if(startChars.indexOf(currentChar) > -1) {
            stack.push(currentChar);
        } else {
            var lastOpenedChar = stack.pop();
            if(endChars.indexOf(currentChar) !== startChars.indexOf(lastOpenedChar)) {
                return false;
            }
        }
    }
    return !stack.length;
};