/**
 * Created by james on 6/18/15.
 */

var NoNamespace = (function () {
    var _name;
    var _privArray;

    function NoNamespace(name) {
        this.pubArray = [];
        _name = name;
    }

    NoNamespace.prototype.saySomething = function() {
        console.log('Look ' + _name + ', no namespace!');
    };

    return NoNamespace;
})();