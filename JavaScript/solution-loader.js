var fs = require('fs');
var Solution = function (code) {
    var self = this;
    self.code = code;
    self.run = function (entryPoint, input) {
        var entryPoint= entryPoint;
        var input = input;
        var result = null;
        var evaluationContext = {};
        (function() {
            with(evaluationContext) {
                eval(self.code);
                result = eval(entryPoint + '(\'' + input + '\');')
            }
        })();
        return result;
    };
};

module.exports = {
    load: function (problemId) {
        var content = fs.readFileSync('solutions/' + problemId + '.js', {encoding: 'utf-8'});
        return new Solution(content);
    }
};