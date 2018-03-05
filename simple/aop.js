(function() {
	function around(target, pointcut, adviced) {
		var f = target[pointcut]
		target[pointcut] = function() {
			adviced.call(null, f)
		}
	}

	AOP = {}
	AOP.after = function(target, pointcut, advice) {
		around(target, pointcut, function(f) {
			f.call()
			advice.call()
		})
	}

	window.AOP = AOP
})();

