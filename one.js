var Hello;

(function(Hello) {
	Hello.Smile = (function() {
		function Smile(name) {
			console.log('Smile ' + name);
		}

		return Smile;
	})();

})(Hello || (Hello = {}));