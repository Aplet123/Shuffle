var ArrayAdv = function(string, seperator) {
    var comma = string.indexOf(seperator);
    var array = [];
    while (comma != (-1)) {
        var string1 = string.substring(0, comma);
        var string2 = string.substring(comma + 1);
        string = string2;
        array = array.concat([string1]);
        comma = string.indexOf(",");
    }
    array = array.concat([string]);
    return array;
};
