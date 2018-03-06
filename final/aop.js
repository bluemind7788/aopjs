(function(root, factory) {
	if(typeof exports === 'object') {
		module.exports = factory()
	} else if(typeof define === 'function' && definde.amd) {
		define(factory)
	} else {
		root.AOP = factory()
	}
})(this, function() {
	function around(target, pointcut, adviced) {
		var f = target[pointcut]
		var oriFunc = function() {
			return f.apply(this, arguments)
		}
		target[pointcut] = function() {
			return adviced.call(target, oriFunc, arguments)
		}
		return {
			remove: function() {
				target[pointcut] = oriFunc
				adviced = null
				oriFunc = null
			}
		}
	}

	AOP = {}
	AOP.before = function(target, pointcut, advice) {
		return around(target, pointcut, function(oriFunc, args) {
			advice.call(this)
			var oriResult = oriFunc.apply(this, args)
			return oriResult
		})
	}
	AOP.after = function(target, pointcut, advice) {
		return around(target, pointcut, function(oriFunc, args) {
			var oriResult = oriFunc.apply(this, args)
			advice.call(this)
			return oriResult
		})
	}
	AOP.around = function(target, pointcut, advice) {
		return around(target, pointcut, function(oriFunc, args) {
			var oriResult
			advice.call(this)
			oriResult = oriFunc.apply(this, args)
			advice.call(this)
			return oriResult
		})
	}
	AOP.afterThrowing = function(target, pointcut, advice) {
		return around(target, pointcut, function(oriFunc, args) {
			var oriResult
			try {
				oriResult = oriFunc.apply(this, args)
			} catch(e) {
				advice.call(this)
			}
			return oriResult
		})
	}


	return AOP
});