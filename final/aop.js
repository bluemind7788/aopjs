(function(root, factory) {
	if(typeof exports === 'object') {
		module.exports = factory()
	} else if(typeof define === 'function' && definde.amd) {
		define(factory)
	} else {
		root.AOP = factory()
	}
})(this, function() {
	
});