$(document).ready(function() {


/* Flecha home */

var posFlecha;
posFlecha=new Array(130,460,775);
$('.home .moduls article:first-child').addClass("activo");
$('.home .moduls article:first-child').addClass("activo");

function updateFlecha(){

	screenWidth = $(window).width();

	if(screenWidth>=970){
		posFlecha=new Array(130,460,775);
		$('.flecha_home').css('display', 'block');
	}

	if(screenWidth>=783 && screenWidth< 970){
		posFlecha=new Array(100,370,630);
		$('.flecha_home').css('display', 'block');
	}
	if(screenWidth<783){
		$('.flecha_home').css('display', 'none');
	}

	indexArticle = $('.home .moduls article.activo').index();
	$('.flecha_home').css('left', posFlecha[indexArticle-1]);


}


$('.home .moduls article .imagen').mouseenter(function() {
	$('.home  .moduls article').removeClass("activo");
	$(this).parent().parent('article').addClass("activo");

	indexArticle = $('.home .moduls article.activo').index();
	//-- flecha
	$('.flecha_home').css('left', posFlecha[indexArticle-1]);
	//-- info
	$('.home .success .container').css('display', "none");
	$('.home .success .container').eq(indexArticle-1).css('display', "block");
})

$(window).bind("resize", function() {updateFlecha();});
updateFlecha();

/* fin flecha */



$('.portfolio article .imagen').mouseenter(function() {
  $('.hover', this).fadeIn("fast");
});
$('.portfolio article .imagen').mouseleave(function() {
  $('.hover', this).fadeOut("fast");
});
/* end Portfolio Filter */



/* View portfolio*/
$('.work-view .image').mouseenter(function() {
	$('.light_big', this).fadeIn("fast");
}).mouseleave(function() {
	$('.light_big', this).fadeOut("fast");
});



/* Banner-mostrar-econder flechas */
$('.oneByOne1, .oneByOne1_v2').mouseenter(function() {
	$('.arrowButton .prevArrow').fadeIn();
	$('.arrowButton .nextArrow').fadeIn();
}).mouseleave(function() {
	$('.arrowButton .prevArrow').fadeOut();
	$('.arrowButton .nextArrow').fadeOut();
});



/* Clients*/

$('.clients li').mouseenter(function() {
	$('img', this).fadeOut();
	$('img.color', this).fadeIn();
}).mouseleave(function() {
	$('img', this).fadeIn();
	$('img.color', this).fadeOut();
});




/* Home portfolio*/
screenWidth = $(window).width();
canvi=783;
if(screenWidth>=canvi){res_actual='gran';}else{res_actual='petit';}

var total=$('.page section .projects .contenedor article').length;
$('.page section .projects .contenedor').css('width',500*total)
pag=1;
calc_pag();
estilo_pag(pag);

$('.botright').click(function(){
	screenWidth = $(window).width();
	calc_pag();
	if(pag!=maxpag){
		pag++;
		estilo_pag(pag);
		if(screenWidth>=canvi){
			if(pag==maxpag){
				if(ultima==0){mou==100;}
				else{mou=(ultima/3)*100;}
			}
			else{mou=100;}
		}else{
			mou=100;
		}
		$('.page section .projects .contenedor').animate({'left': '-='+mou+'%'}, "slow");
	}
})

$('.botleft').click(function(){
	screenWidth = $(window).width();
	calc_pag();
	if(pag!=1){
		pag--;
		estilo_pag(pag);
		if(screenWidth>=canvi){
			if(pag==1){
				if(ultima==0){mou==100;}
				else{mou=(ultima/3)*100;}
			}
			else{mou=100;}
		}else{
			mou=100;
		}
		$('.page section .projects .contenedor').animate({'left': '+='+mou+'%'}, "slow");
	}
})

$('.botright').mouseenter(function() {if(pag!=maxpag){$('.botright').removeClass('off')}}).mouseleave(function() {$('.botright').addClass('off')})
$('.botleft').mouseenter(function() {if(pag!=1){$('.botleft').removeClass('off')}}).mouseleave(function() {$('.botleft').addClass('off')})

function calc_pag(){
	if(screenWidth>=canvi){
		maxpag=Math.ceil(total/3);
		ultima=total%3;
	}else{
		maxpag=total;
		ultima=total;
	}
}

function estilo_pag(pag){
	if(pag==1){$('.botleft').css('opacity', 0.4); $('.botright').css('opacity', 1);}
	else if(pag==ultima){$('.botright').css('opacity', 0.4); $('.botleft').css('opacity', 1);}
	else{$('.botright').css('opacity', 1); $('.botleft').css('opacity', 1);}
};

function updateporfolio(){
	screenWidth = $(window).width();

	if(screenWidth>=canvi){
		if(res_actual=='petit'){reset_porfolio()}
		res_actual='gran';
	}else{
		if(res_actual=='gran'){reset_porfolio()}
		res_actual='petit';
	}


}

function reset_porfolio(){
	pag=1;
	pagT=1;
	pagC=1;
	$('.page section .projects .contenedor').css('left','0px')
	$('.page section .testimonials .contenedor').css('left','0px')
	$('.page section .clients ul').css('left','0px')
	estilo_pag(1)
	estilo_pag_cli(1)
	estilo_pag_test(1)
}

$(window).bind("resize", function() {updateporfolio();});

// testimonials services
var totalT=$('.page section .testimonials .contenedor article').length;
$('.page section .testimonials .contenedor').css('width',500*totalT)
pagT=1;
calc_pag_test();
estilo_pag_test(pagT);

function calc_pag_test(){
	if(screenWidth>=canvi){
		maxpagT=Math.ceil(totalT/3);
		ultimaT=totalT%3;
	}else{
		maxpagT=totalT;
		ultimaT=totalT;
	}
}

function estilo_pag_test(pagT){
	if(pagT==1){$('.botleft2').css('opacity', 0.4); $('.botright2').css('opacity', 1);}
	else if(pagT==maxpagT){$('.botright2').css('opacity', 0.4); $('.botleft2').css('opacity', 1);}
	else{$('.botright2').css('opacity', 1); $('.botleft2').css('opacity', 1);}
};

$('.botright2').mouseenter(function() {if(pagT!=maxpagT){$('.botright2').removeClass('off')}}).mouseleave(function() {$('.botright2').addClass('off')})
$('.botleft2').mouseenter(function() {if(pagT!=1){$('.botleft2').removeClass('off')}}).mouseleave(function() {$('.botleft2').addClass('off')})

$('.botright2').click(function(){
	screenWidth = $(window).width();
	calc_pag_test();
	if(pagT!=maxpagT){
		pagT++;
		estilo_pag_test(pagT);
		if(screenWidth>=canvi){
			if(pagT==maxpagT){
				if(ultimaT==0){mou==100;}
				else{mou=(ultimaT/3)*100;}
			}
			else{mou=100;}
		}else{
			mou=100;
		}
		$('.page section .testimonials .contenedor').animate({'left': '-='+mou+'%'}, "slow");
	}
})

$('.botleft2').click(function(){
	screenWidth = $(window).width();
	calc_pag_test();
	if(pagT!=1){
		pagT--;
		estilo_pag_test(pagT);
		if(screenWidth>=canvi){
			if(pagT==1){
				if(ultimaT==0){mou==100;}
				else{mou=(ultimaT/3)*100;}
			}
			else{mou=100;}
		}else{
			mou=100;
		}
		$('.page section .testimonials .contenedor').animate({'left': '+='+mou+'%'}, "slow");
	}
})

//clients services

var totalC=$('.page section .clients ul li').length;
/*$('.page section .clients ul').css('width',500*totalC)*/
pagC=1;
calc_pag_cli();
estilo_pag_cli(pagC);

function calc_pag_cli(){
	if(screenWidth>=canvi){
		maxpagC=Math.ceil(totalC/5);
		ultimaC=totalC%5;
	}else{
		maxpagC=Math.ceil(totalC/2);
		ultimaC=totalC%2;
	}
}

function estilo_pag_cli(pagC){
	if(pagC==1){$('.botleft3').css('opacity', 0.4); $('.botright3').css('opacity', 1);}
	else if(pagC==maxpagC){$('.botright3').css('opacity', 0.4); $('.botleft3').css('opacity', 1);}
	else{$('.botright3').css('opacity', 1); $('.botleft3').css('opacity', 1);}
};

$('.botright3').mouseenter(function() {if(pagC!=maxpagC){$('.botright3').removeClass('off')}}).mouseleave(function() {$('.botright3').addClass('off')})
$('.botleft3').mouseenter(function() {if(pagC!=1){$('.botleft3').removeClass('off')}}).mouseleave(function() {$('.botleft3').addClass('off')})

$('.botright3').click(function(){
	screenWidth = $(window).width();
	calc_pag_cli();
	if(pagC!=maxpagC){
		pagC++;
		estilo_pag_cli(pagC);
		if(screenWidth>=canvi){
			if(pagC==maxpagC){
				if(ultimaC==0){mou==100;}
				else{mou=(ultimaC/5)*100;}
			}
			else{mou=100;}
		}else{
			if(pagC==maxpagC){
				if(ultimaC==0){mou==100;}
				else{mou=(ultimaC/2)*100;}
			}
			else{mou=100;}
		}
		$('.page section .clients ul').animate({'left': '-='+mou+'%'}, "slow");
	}
})

$('.botleft3').click(function(){
	screenWidth = $(window).width();
	calc_pag_cli();
	if(pagC!=1){
		pagC--;
		estilo_pag_cli(pagC);
		if(screenWidth>=canvi){
			if(pagC==1){
				if(ultimaC==0){mou==100;}
				else{mou=(ultimaC/5)*100;}
			}
			else{mou=100;}
		}else{
			if(pagC==maxpagC){
				if(ultimaC==0){mou==100;}
				else{mou=(ultimaC/2)*100;}
			}
			else{mou=100;}
		}
		$('.page section .clients ul').animate({'left': '+='+mou+'%'}, "slow");
	}
})



/* home hover*/
	$('.page article .imagen, .page article .imagen2').mouseenter(function() {
	  $('.hover', this).fadeIn("fast");
/*	  $('.hover .lupa',this).css('right','5%');
	  $('.hover .lupa',this).animate({'right': '30%'}, "fast");
  	  $('.hover .link',this).css('top','15%');
	  $('.hover .link',this).animate({'top': '38%'}, "fast");*/
	});

	$('.page article .imagen, .page article .imagen2').mouseleave(function() {
	  $('.hover', this).fadeOut("fast");
/*	  $('.hover .lupa',this).css('right','30%');
	  $('.hover .lupa',this).animate({'right': '5%'}, "fast");
	  $('.hover .link',this).css('top','38%');
	  $('.hover .link',this).animate({'top': '5%'}, "fast");*/
	});

/* Menu line*/
	$('.myMenu .lineamenu').css('width',($('.myMenu .active').width()+17))

/* Menu hover*/

	$('.menu ul li.nomenu').mouseenter(function() {
		$(this).addClass('selected')
	}).mouseleave(function() {
		$(this).removeClass('selected')
	});

/* Search */

	$('.search input:text').focus(function(){
		$(this).attr('value','');
	});

	$("#search").focusout(function() {
		if($(this).val() == ''){$(this).attr('value','search');}
	})


/* menu responsive*/

    $(function(){
      // bind change event to select
      $('.navegation_resp').bind('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
    });


/* faq */

	$('.question').click(function(){
		if($(this).hasClass('qclosed')){
			$('.qopen').parent().find('.answer').slideUp('fast');
			$('.qopen').removeClass('qopen').addClass('qclosed');
			$(this).removeClass('qclosed').addClass('qopen');
			$(this).parent().find('.answer').slideDown('fast');
		}else{
			$(this).removeClass('qopen').addClass('qclosed');
			$(this).parent().find('.answer').slideUp('fast');
		}
	})

//hover team

	$('.team li').mouseenter(function(){
		$('.color',this).css('display','block')
		$('.grisos',this).css('display','none')
	}).mouseleave(function() {
		$('.color',this).css('display','none')
		$('.grisos',this).css('display','block')
	})


});
