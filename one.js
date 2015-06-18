var Hello;

(function(Hello) {
	var Smile = (function() {
		function Smile(name) {
			console.log('Smile ' + name);
		}

		return Smile;
	})();

	Hello.Smile = Smile;

})(Hello || (Hello = {}));