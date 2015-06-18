/**
 * Created by james on 6/18/15.
 */

var NoNamespace = (function () {
    var name;

    function NoNamespace(newName) {
        name = newName;
    }

    NoNamespace.prototype.saySomething = function() {
        console.log('Look ' + name + ', no namespace!');
    };

    return NoNamespace;
})();