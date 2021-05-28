/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var res = address.replace(new RegExp(`[.]`,"g"),"[.]")
    return res;
};