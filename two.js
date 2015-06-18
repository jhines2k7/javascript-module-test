var Hello;

(function(Hello) {
	var Frown = (function() {
		function Frown(name) {
			console.log('Frown ' + name);
		}

		return Frown;
	})();

	Hello.Frown = Frown;

})(Hello || (Hello = {}));