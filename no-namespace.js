/**
 * Created by james on 6/18/15.
 */

var NoNamespace = (function () {
    var _name;

    function NoNamespace(name) {
        _name = name;
    }

    NoNamespace.prototype.saySomething = function() {
        console.log('Look ' + _name + ', no namespace!');
    };

    return NoNamespace;
})();