var _ = require('lodash');
var loader = require('./solution-loader');

var arguments = process.argv.slice(2);

var problemsList = loader.loadAll();
//var problemsList = [];
//if (arguments.length > 0) {
//    problemsList = arguments;
//} else {
//    problemsList = _.keys(tests);
//}
_.forEach(problemsList, function (solution, problemId) {
    var entryPoint = testInfo.entryPoint;
    var problemSpecs = testInfo.specs;
    console.log('start executing tests for : ' + problem);
    console.log('entry point: ' + entryPoint);
    _.forEach(problemSpecs, function (spec) {
        console.log('test id : ' + spec.id);
        console.log('   input : ' + spec.input);
        console.log('   expect : ' + spec.expect);
        var result = solution.run(entryPoint, spec.input, spec.expected);
        console.log('   get : ', result);
        var testResult = result == spec.expect;
        console.log('   Result: ' + testResult);
    });
});


