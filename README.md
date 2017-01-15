# js-ripple-click
A JavaScript utility for Ripple effect on click on different HTML elements.

##How to use viral-ripple-click.js
* Download latest js-ripple-click - JavaScript utility.
  * [The compressed, production viral-ripple-click-1.0.0](https://raw.githubusercontent.com/virallalakia/js-ripple-click/master/dist/js/viral-ripple-click-1.0.0.min.js)
  * [The uncompressed, development viral-ripple-click-1.0.0](https://raw.githubusercontent.com/virallalakia/js-ripple-click/master/dist/js/viral-ripple-click-1.0.0.js)
* viral-ripple-click.js provides 3 utility functions:
  * `viralRippleClick.options()` - utility function to get/set options for ripple effect on click on HTML elements
  * `viralRippleClick.disable()` - utility function to disable ripple effect on click on HTML elements, this PRESERVEs all options
  * `viralRippleClick.enable()` - utility function to enable ripple effect on click on HTML elements, this PRESERVEs all options

##Options
* `elemSelector`: CSS selector of the elements on which ripple click effect to be displayed (default value: `'button'`)
* `color`: color to be used for ripple click effect (default value: `'#FFFFFF'`)
* `opacityStart`: opacity to be used when ripple click effect starts (default value: `'0.4'`)
* `opacityEnd`: opacity to be used when ripple click effect ends (default value: `'0'`)
* `transitionType`: transition timing function to be used for ripple click effect (default value: `'ease-in-out'`)

##Utility functions (Syntax and Usage)
1. **options** - utility function to get/set options for ripple effect on click on HTML elements

	* get options
	  <br>
	  Syntax: `viralRippleClick.options();`
		```javascript
		// get options for ripple effect
		// example:
		var rippleEffectOptions = viralRippleClick.options();
		// sample returned options obect:
		{
			'elemSelector': 'button',
			'color': '#FFFFFF',
			'opacityStart': '0.4',
			'opacityEnd': '0',
			'transitionType': 'ease-in-out'
		}
		```

	* set options
	  <br>
	  Syntax: `viralRippleClick.options(options);`
		```javascript
		// set options for ripple effect on click on HTML elements
		// example: set all options
		viralRippleClick.options({
			'elemSelector': 'button, ul.menu li, #specialElem, [elem-with-ripple-effect]',
			'color': 'black',
			'opacityStart': 0.8,
			'opacityEnd': 0.2,
			'transitionType': 'linear'
		});
		// example: set only 'color' and 'transitionType'
		viralRippleClick.options({
			'color': '#252525',
			'transitionType': 'ease-in'
		});
		```

2. **disable** - utility function to disable ripple effect on click on HTML elements, this PRESERVEs all options
	```javascript
	viralRippleClick.disable();
	```

3. **enable** - utility function to enable ripple effect on click on HTML elements, this PRESERVEs all options
	```javascript
	viralRippleClick.enable();
	```

## Demo page
* **[Demo page on GitHub](https://virallalakia.github.io/js-ripple-click/)**
