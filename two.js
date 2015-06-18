var Hello;

(function(Hello) {
	Hello.Frown = (function() {
		function Frown(name) {
			console.log('Frown ' + name);
		}

		return Frown;
	})();

})(Hello || (Hello = {}));