(function ($V) {
	function attachButtonEvents() {
		var setOptions = function () {
			viralRippleClick.options({
				'elemSelector': $V.select('#elemSelector')[0].value,
				'color': $V.select('#color')[0].value,
				'opacityStart': $V.select('#opacityStart')[0].value,
				'opacityEnd': $V.select('#opacityEnd')[0].value,
				'transitionType': $V.select('#transitionType')[0].value
			});
		};
		var $buttonOptions = $V.select('#button-options')[0];
		$V.off($buttonOptions, 'click', setOptions);
		$V.on($buttonOptions, 'click', setOptions);

		var enableHandler = function () {
			setTimeout(function () {
				viralRippleClick.enable();
			}, 0);
		};
		var $buttonEnable = $V.select('#button-enable')[0];
		$V.off($buttonEnable, 'click', enableHandler);
		$V.on($buttonEnable, 'click', enableHandler);

		var disableHandler = function () {
			setTimeout(function () {
				viralRippleClick.disable();
			}, 0);
		};
		var $buttonDisable = $V.select('#button-disable')[0];
		$V.off($buttonDisable, 'click', disableHandler);
		$V.on($buttonDisable, 'click', disableHandler);
	}

	$V.documentReady(function() {
		attachButtonEvents();
	});
})(viralJsUtils);
