var fs = require('fs');
var _ = require('lodash');

var Solution = function (params) {
    this.problemName = params.problemName;
    this.entryPoint = params.entryPoint;
    this.code = params.code;
    this.specs = params.specs;
};
Solution.prototype.test = function () {
    var self = this;
    if (self.specs.length === 0) {
        console.log('for ' + self.problemName + ' specs not found!');
        return;
    }
    console.log('test : ' + self.problemName);
    _.forEach(this.specs, function (spec) {
        console.log('start executing spec: ' + spec.id);
        console.log('   input : ' + spec.input);
        console.log('   expect : ' + spec.expect);
        var result = self.run(spec.input);
        console.log('   result : ' + result);
        var status = _.isEqual(result, spec.expect);
        console.log(status ? 'SUCCESS' : 'FAIL');
    });
};
Solution.prototype.run = function (input) {
    var result = null;
    var self = this;
    var evaluationContext = {};
    (function () {
        with (evaluationContext) {
            eval(self.code);
            result = eval(self.entryPoint + '(\'' + input + '\');')
        }
    })();
    return result;
};
var loadFunc = function (problemId) {
    var code = fs.readFileSync('solutions/' + problemId + '/' + problemId + '.js', {encoding: 'utf-8'});
    var data = JSON.parse(fs.readFileSync('solutions/' + problemId + '/' + problemId + '.json', {encoding: 'utf-8'}));
    return new Solution({code: code, entryPoint: data.entryPoint, specs: data.specs, problemName: problemId});
};
module.exports = {
    load: loadFunc,
    loadAll: function () {
        var problems = fs.readdirSync('solutions');
        return _.map(problems, loadFunc);
    }
};