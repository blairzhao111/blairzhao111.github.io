//**********************************
//* Custom Script fro Resume.html
//**********************************
(function($){

	var $main = $('#main'),
		$toTop = $('#toTop'),
		$toBottom = $('#toBottom'),
		$expandToggle = $('#expandToggle'),
		$switch = $('#switch');

	$main.slideDown(1200, function(){
		$switch.bootstrapSwitch();
	});
	

	//event handler for toTop button
	$toTop.on('click', function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 750);
		return false;
	});

	//event handler for toBottom button
	$toBottom.on('click', function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $(document).height()}, 750);
		return false;
	});

	//event handler for toggling all collapses in the page
	$expandToggle.on('click', function(event){
		event.preventDefault();

		var $this = $(this);

		if($this.hasClass('expandAll')){
			var html = $this.html().replace("Expand All", "Close All");

			$this.html(html);

			$('div.collapse:not(.in)').addClass('in');

			$this.removeClass('expandAll').addClass('closeAll');
		}else if($this.hasClass('closeAll')){
			var html = $this.html().replace("Close All", "Expand All");

			$this.html(html);

			$('div.collapse.in').removeClass('in');

			$this.removeClass('closeAll').addClass('expandAll');
		}
		
		return false;
	});

	//event handler for toggling switch button
	$switch.on('switchChange.bootstrapSwitch', function(event, state){
		var $body = $('body');

		if(state){
			$body.animate({
				'background-color': '#e3e3e3'
			}, 800);
		}else {
			$body.animate({
				'background-color': 'black'
			}, 800);
		}

		return false;
	});

})(jQuery);