/*!
 * js-ripple-click - JavaScript Utility - a ViralProject piece
 * https://github.com/virallalakia/js-ripple-click
 * Copyright (c) Viral Lalakia
 * MIT License
 * https://github.com/virallalakia/js-ripple-click/blob/master/LICENSE
 */

var viralJsUtils = viralJsUtils || {};

(function($V) {
	// utils
	$V['type'] = function(obj) {
		if (typeof (obj) === "undefined") {
			return ("undefined");
		}
		return (Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase());
	};
	$V['trim'] = function(str) {
		return (str.trim());
	};
	$V['indexOf'] = function(item, array) {
		return (array.indexOf(item));
	};
	$V['isArray'] = function(item, array) {
		return (Array.isArray(arr));
	};
	$V['map'] = function(array, fn) {
		array.map(fn);
	};
	$V['parseJSON'] = function(str) {
		return (JSON.parse(str));
	};
	$V['stringifyJSON'] = function(obj) {
		return (JSON.stringify(obj));
	};
	$V['extend'] = function(p1, p2) {
		var deepExtend = false;
		var outObj = {};
		var startArgNo = 1;
		if($V.type(p1) === 'boolean') {
			deepExtend = p1;
			outObj = p2 || outObj;
			startArgNo = 2;
		} else {
			deepExtend = false;
			outObj = p1 || outObj;
			startArgNo = 1;
		}
		for (var i = startArgNo; i < arguments.length; i++) {
			var obj = arguments[i];
			if (!obj || $V.type(obj) !== 'object') {
				continue;
			}
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (deepExtend && $V.type(obj[key]) === 'object') {
						outObj[key] = $V.extend(true, outObj[key], obj[key]);
					} else {
						outObj[key] = obj[key];
					}
				}
			}
		}
		return outObj;
	};

	// iterators
	$V['forEachElement'] = function(selector, fn) {
		var $elements = document.querySelectorAll(selector);
		for (var i = 0; i < $elements.length; i++) {
			fn($elements[i], i);
		}
	};
	$V['forEach'] = function(array, fn) {
		array.forEach(fn);
	};

	// DOM related
	$V['select'] = function(selector) {
		return (document.querySelectorAll(selector));
	};
	$V['find'] = function($el, selector) {
		return ($el.querySelectorAll(selector));
	};
	$V['parent'] = function($el) {
		return ($el.parentNode);
	};
	$V['children'] = function($el) {
		var $children = [];
		for (var i = $el.children.length; i--;) {
			// Skip comment nodes on IE8
			if ($el.children[i].nodeType != 8) {
				$children.unshift($el.children[i]);
			}
		}
		return $children;
	};
	$V['siblings'] = function($el) {
		return (Array.prototype.filter.call($el.parentNode.children, function($child) {
			return ($child !== $el);
		}));
	};
	$V['contains'] = function($el, $child) {
		return ($el !== $child && $el.contains($child));
	};
	$V['containsSelector'] = function($el, selector) {
		return ($el.querySelector(selector) !== null);
	};
	$V['isElem'] = function($el, $otherEl) {
		return ($el === $otherEl);
	};
	$V['is'] = function($el, selector) {
		return ($el.matches || $el.matchesSelector || $el.msMatchesSelector || $el.mozMatchesSelector || $el.webkitMatchesSelector || $el.oMatchesSelector).call($el, selector);
	};
	$V['next'] = function($el) {
		return ($el.nextElementSibling);
	};
	$V['prev'] = function($el) {
		return ($el.previousElementSibling);
	};
	$V['text'] = function($el, textString) {
		if(textString === undefined) {
			return ($el.textContent);
		} else {
			$el.textContent = textString;
		}
	};
	$V['html'] = function($el, htmlString) {
		if(htmlString === undefined) {
			return ($el.innerHTML);
		} else {
			$el.innerHTML = htmlString;
		}
	};
	$V['outerhtml'] = function($el) {
		return ($el.outerHTML);
	};
	$V['clone'] = function($el) {
		return ($el.cloneNode(true));
	};
	$V['append'] = function($parent, $el) {
		$parent.appendChild($el);
	};
	$V['prepend'] = function($parent, $el) {
		$parent.insertBefore($el, $parent.firstChild);
	};
	$V['after'] = function($el, htmlString) {
		$el.insertAdjacentHTML('afterend', htmlString);
	};
	$V['before'] = function($el, htmlString) {
		$el.insertAdjacentHTML('beforebegin', htmlString);
	};
	$V['empty'] = function($el) {
		while($el.firstChild) {
			$el.removeChild($el.firstChild);
		}
	};
	$V['remove'] = function($el) {
		$el.parentNode.removeChild($el);
	};
	$V['replaceWith'] = function($el, htmlString) {
		$el.outerHTML = htmlString;
	};
	$V['parseHTML'] = function(htmlString) {
		var tmp = document.implementation.createHTMLDocument();
		tmp.body.innerHTML = htmlString;
		return tmp.body.children;
	};

	// attribute related
	$V['attr'] = function($el, attributeName, attributeValue) {
		if(attributeValue === undefined) {
			return ($el.getAttribute(attributeName));
		} else {
			$el.setAttribute(attributeName, attributeValue);
		}
	};

	// styling
	$V['hide'] = function($el) {
		$el.style.display = 'none';
	};
	$V['show'] = function($el) {
		$el.style.display = 'block';
	};
	$V['css'] = function($el, p1, p2) {
		if($V.type(p1) === 'object') {
			var keys = Object.keys(p1);
			for (var i = 0; i < keys.length; i++) {
				$V.css($el, keys[i], p1[keys[i]]);
			};
		} else {
			var ruleName = p1;
			var ruleValue = p2;
			if(ruleValue === undefined) {
				return(getComputedStyle($el)[ruleName]);
			} else {
				$el.style[ruleName] = ruleValue;
			}
		}
	};
	$V['addClass'] = function($el, className) {
		if ($el.classList) {
			$el.classList.add(className);
		} else {
			$el.className += ' ' + className;
		}
	};
	$V['removeClass'] = function($el, className) {
		if ($el.classList) {
			$el.classList.remove(className);
		} else {
			$el.className = $el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	};
	$V['hasClass'] = function($el, className) {
		if ($el.classList) {
			return ($el.classList.contains(className));
		} else {
			return (new RegExp('(^| )' + className + '( |$)', 'gi').test($el.className));
		}
	};
	$V['toggleClass'] = function($el, className) {
		if ($el.classList) {
			$el.classList.toggle(className);
		} else {
			var classes = $el.className.split(' ');
			var existingIndex = classes.indexOf(className);
			if (existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			} else {
				classes.push(className);
			}
			$el.className = classes.join(' ');
		}
	};
	$V['outerWidth'] = function($el, withMargin) {
		var width = $el.offsetWidth;
		if(withMargin) {
			var style = getComputedStyle($el);
			width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		}
		return width;
	};
	$V['outerHeight'] = function($el, withMargin) {
		var height = $el.offsetHeight;
		if(withMargin) {
			var style = getComputedStyle($el);
			height += parseInt(style.marginTop) + parseInt(style.marginBottom);
		}
		return height;
	};
	$V['offset'] = function($el) {
		var rect = $el.getBoundingClientRect();
		return {
			top: rect.top + document.body.scrollTop,
			left: rect.left + document.body.scrollLeft
		};
	};
	$V['offsetParent'] = function($el) {
		return ($el.offsetParent || $el);
	};
	$V['position'] = function($el) {
		return {
			left: $el.offsetLeft,
			top: $el.offsetTop
		};
	};
	$V['positionRelToViewport'] = function($el) {
		return ($el.getBoundingClientRect());
	};

	// events
	$V['documentReady'] = function(eventHandler) {
		if(document.readyState !== 'loading') {
			eventHandler();
		} else {
			document.addEventListener('DOMContentLoaded', eventHandler);
		}
	};
	$V['off'] = function($el, eventName, eventHandler) {
		$el.removeEventListener(eventName, eventHandler);
	};
	$V['on'] = function($el, eventName, eventHandler) {
		$el.addEventListener(eventName, eventHandler);
	};
	$V['trigger'] = function(eventName) {
		var event = document.createEvent('HTMLEvents');
		event.initEvent(eventName, true, false);
		$el.dispatchEvent(event);
	};
	$V['triggerCustom'] = function(eventName, eventData) {
		if(CustomEvent) {
			var event = new CustomEvent(eventName, {
				detail: eventData
			});
		} else {
			var event = document.createEvent('CustomEvent');
			event.initCustomEvent(eventName, true, true, eventData);
		}
		$el.dispatchEvent(event);
	};
})(viralJsUtils);

var viralRippleClick = (function ($V) {

	// private
	var _default = {
		'elemSelector': 'button',
		'color': '#FFFFFF',
		'opacityStart': '0.4',
		'opacityEnd': '0',
		'transitionType': 'ease-in-out'
	};

	var _options = $V.extend(true, {}, _default);

	var _$viralRippleCont;
	var _$viralRipple;

	var timeoutHandler = function() {
		$V.css(_$viralRippleCont, {'width': 0, 'height': 0, 'left': 0, 'top': 0});
		$V.css(_$viralRipple, {'transition': 'none', 'opacity': _options['opacityStart'], 'transform': 'scale(0)'});
	};

	var documentClickHandler = function(e) {
		var $target = e.target;
		if (!$V.is($target, _options['elemSelector'])) {
			return;
		}

		var targetOffset = $V.offset($target);
		var targetTotalWidth = $V.outerWidth($target);
		var targetTotalHeight = $V.outerHeight($target);
		var scale = 2.5 * (targetTotalWidth >= targetTotalHeight ? targetTotalWidth : targetTotalHeight); 
		var delay = (scale > 400 ? (scale <= 800 ? scale : 800) : 400);

		$V.css(_$viralRippleCont, {'width': targetTotalWidth, 'height': targetTotalHeight, 'left': targetOffset.left, 'top': targetOffset.top});
		$V.css(_$viralRipple, {'transition': 'opacity 0.5s ' + _options['transitionType'] + ' 0s, transform 0.5s ' + _options['transitionType'] + ' 0s', 'left': e.pageX - targetOffset.left, 'top': e.pageY - targetOffset.top, 'opacity': _options['opacityEnd'], 'transform': 'scale(' + scale + ')'});
		setTimeout(timeoutHandler, delay);
	};

	var init = function(reinitFlag) {
		if (reinitFlag !== true) {
			$V.append($V.select('body')[0], $V.parseHTML('<div class="viral-ripple-cont"><div class="viral-ripple"></div></div>')[0]);
			_$viralRippleCont = $V.select('.viral-ripple-cont')[0];
			_$viralRipple = $V.find(_$viralRippleCont, '.viral-ripple')[0];
		}
		$V.css(_$viralRippleCont, {
			'position': 'absolute',
			'top': '0',
			'left': '0',
			'width': '0px',
			'height': '0px',
			'overflow': 'hidden',
			'pointer-events': 'none'
		});
		$V.css(_$viralRipple, {
			'position': 'absolute',
			'top': '0',
			'left': '0',
			'width': '1px',
			'height': '1px',
			'border-radius': '50%',
			'background': _options['color'],
			'opacity': _options['opacityEnd'],
			'transform': 'scale(0)',
			'pointer-events': 'none'
		});

		timeoutHandler();
		enable();
	};

	$V.documentReady(init);

	// public
	var options = function(p1) {
		if($V.type(p1) === 'object') {
			_options = $V.extend(true, _options, p1);
			init(true);
		} else {
			return ($V.extend(true, {}, _options));
		}
	};

	var disable = function () {
		$V.off(document, 'click', documentClickHandler);
	};

	var enable = function () {
		$V.off(document, 'click', documentClickHandler);
		$V.on(document, 'click', documentClickHandler);
	};

	return {
		'options': options,
		'disable': disable,
		'enable': enable
	};

})(viralJsUtils);
