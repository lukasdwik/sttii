/* ---------------------------------------------------------------------- */
	/*	Portfolio Filter
	/* ---------------------------------------------------------------------- */

$(window).load(function(){

	var $container = $('.portfolio');
	$container.isotope({
		filter: '*',
		layoutMode : 'fitRows',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('nav.primary ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});

		//centro el porfolio
		total=$('.portfolio article').filter(selector).length;
		var p=0;
		while(p<=total){
			switch(p%3)
			{
			case 0: clase = "leftal";
			break;
			case 1: clase = "cental";
			break;
			default: clase ="rightal";
			}

			switch(p%2)
			{
			case 0: clase2col = "leftal";
			break;
			case 1: clase2col = "rightal";
			break;
			}

			$('.portfolio article').filter(selector).eq(p).children('.posicio').removeClass('leftal cental rightal').addClass(clase);
			$('.portfolio article').filter(selector).eq(p).children('.posicio2col').removeClass('leftal rightal').addClass(clase2col);
			p++;
		}

		//$('.portfolio article'+selector+':nth-child(3n+1)').css('background','#000')
		//alert($('.portfolio article').filter(selector+':nth-child(3n+1)').length )
	  return false;
	});

	var $optionSets = $('nav.primary ul'),
	       $optionLinks = $optionSets.find('a');

	       $optionLinks.click(function(){
	          var $this = $(this);
		  // don't proceed if already selected
		  if ( $this.hasClass('selected') ) {
		      return false;
		  }
	   var $optionSet = $this.parents('nav.primary ul');
	   $optionSet.find('.selected').removeClass('selected');
	   $optionSet.find('.sel_left').remove()
	   $optionSet.find('.sel_right').remove()
	   $this.addClass('selected');
	   $this.parent().append('<span class="sel_left"></span>');
	   $this.parent().prepend('<span class="sel_right"></span>');

	});

});
