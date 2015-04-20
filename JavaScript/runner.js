var _ = require('lodash');
var loader = require('./solution-loader');

//var arguments = process.argv.slice(2);

var problemsList = loader.loadAll();

_.forEach(problemsList, function (solution) {
    solution.test();
});


