var fs = require('fs');
var Solution = function (params) {
    this.problemName = params.problemName;
    this.entryPoint = params.entryPoint;
    this.code = params.code;
    this.specs = params.specs;
};
Solution.prototype.run = function (input) {
    var result = null;
    var evaluationContext = {};
    (function () {
        with (evaluationContext) {
            eval(this.code);
            result = eval(this.entryPoint + '(\'' + input + '\');')
        }
    })();
    return result;
};
var loadFunc = function (problemId) {
    var code = fs.readFileSync('solutions/' + problemId + '.js', {encoding: 'utf-8'});
    var data = fs.readFileSync('solutions/' + problemId + '.json', {encoding: 'utf-8'});
    return new Solution({ code: code, entryPoint: data.entryPoint, specs: data.specs, problemName: problemId});
};
module.exports = {
    load: loadFunc,
    loadAll: function () {
        var problems = fs.readdirSync('solutions');
        return _.map(problems, loadFunc);
    }
};