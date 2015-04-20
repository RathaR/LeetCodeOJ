/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var v1 = version1.split('.').map(function(number) {
        return parseInt(number);
    });
    var v2 = version2.split('.').map(function(number) {
        return parseInt(number);
    });
    var isInvalid = (version1[0] == '0' && version1[1] !== '.' && version1.length > 1) || (version2[0] == '0' && version2[1] !== '.' && version2.length > 1 );
    if(isInvalid || (v1[0] == v2[0] && v1[1] == v2[1])) {
        return 0;
    }
    if (v1[0] !== v2[0]) {
        return v1[0] > v2[0] ? 1 : -1;
    } else {
        return v1[1] > v2[1] ? 1 : -1;
    }
};