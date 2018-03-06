(function() {
	function around(target, pointcut, adviced) {
		var f = target[pointcut]
		target[pointcut] = function() {
			adviced.call(null, f)
		}
	}

	Knit = {}
	Knit.after = function(target, pointcut, advice) {
		around(target, pointcut, function(f) {
			f.call(null)
			advice.call(null)
		})
	}

	window.Knit = Knit
})();

