[Aspect Oriented Programming](http://en.wikipedia.org/wiki/Aspect-oriented_programming "Aspect-oriented programming - Wikipedia, the free encyclopedia") for Javascript.  It allows you to change the behavior of, or add behavior to methods and functions (including constructors) *non-invasively*.

As a simple example, instead of changing code, you can use meld to log the result of `myObject.doSomething`:

```js
var myObject = {
	add: function(a, b) {
		return a + b;
	}
};

// Call a function after myObject.add returns
var remover = knit.after(myObject, 'add', function(result) {
	console.log('myObject.add returned: ' + result);
});

myObject.add(1, 2); // Logs: "myObject.add returned: 3"

remover.remove();

myObject.add(1, 2); // Nothing logged
```

# Quick Start

### AMD

1. Get it using one of the following
	1. `npm install @bluemind/knitjs `, or
	1. `git clone git+https://github.com/bluemind7788/knitjs.git`, or
	1. `git submodule add git+https://github.com/bluemind7788/knitjs.git`

1. Configure your loader with a package:

	```js
	packages: [
		{ name: 'knit', location: 'path/to/knit', main: 'knit' },
		// ... other packages ...
	]
	```

1. `define(['knit', ...], function(knit, ...) { ... });` or `require(['knit', ...], function(knit, ...) { ... });`

### Node

1. `npm install @bluemind/knitjs`
1. `var knit = require('Knit');`