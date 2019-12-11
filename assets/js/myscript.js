// SCROLL WINDOW TO ID

$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
						scrollTop: target.offset().top
				}, 1000);
		}
});

var md = window.matchMedia( "(min-width: 1000px)" );

  if (md.matches) {

		var i = null;

    $(document).on('mousemove', function(e) {

			var x = e.clientX;
			var y = e.clientY;

      $('#cursor').css({
        left: e.clientX,
        top: e.clientY,
      });

			$("#cursorRound").show();
			$('#cursorRound').css({
				opacity: '1',
        left: e.clientX - 16,
        top: e.clientY - 16,
				width: '40px',
				height: '40px'
      });

			// i = setTimeout('$("#cursorRound").css({width:"0",height:"0",opacity: "0"});', 1000);

    }).mouseleave(function() {
				clearTimeout(i);
		});

	// 	$('#demo').mouseleave(function(event) {
	// 	$('.tab').stop().animate({
	// 		opacity : '0.5',
	// 		marginTop: '10px'
	// 	}, 600, function() {		//animation complete
	// 		$('#demo').addClass('hovered');
	// 	});
  //   });
	// $('#demo').mouseover(function(event) {
	// 	$('.tab').stop().animate({
	// 		opacity : '1',
	// 		marginTop: '0px'
	// 	}, 300, function() {		//animation complete
	// 		$('#demo').removeClass('hovered');
	// 	});
  //   });

		// $("#cursorRound").hide();
		// 	var i = null;
		// 	$(document).mousemove(function() {
		// 	    clearTimeout(i);
		// 	    $("#cursorRound").show();
		// 	    i = setTimeout('$("#cursorRound").hide();', 500);
		// 	}).mouseleave(function() {
		// 	    clearTimeout(i);
		// 	    // $("#cursorRound").hide();
		// 	});

    // $(window).on('scroll', function(e) {
		//
    // });

    var circle = document.getElementsByClassName('circle');
     document.onmousemove = function(){
       var x = event.clientX * 100 / window.innerWidth + "%";
       var y = event.clientY * 100 / window.innerHeight + "%";

       for(var i=0;i<2;i++) {
         circle[i].style.left = x;
         circle[i].style.top = y;
         circle[i].style.transform = "translate(-"+x+",-"+y+")";
       }
     }

  }




	var position = $(window).scrollTop();

	// should start at 0

	$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if( scroll > position ) {
					console.log('scrollDown');
					$('.hamburger_div').removeClass('hamburger_div-show');
					$('.hamburger_div').addClass('hamburger_div-hide');

			}

			if( scroll < position ) {
				$('.hamburger_div').removeClass('hamburger_div-hide')
				$('.hamburger_div').addClass('hamburger_div-show');
					console.log('scrollUp');
			}
			// else {
			//      console.log('scrollUp');
			// }
			position = scroll;
	});

 // Menu Slide

 	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

 	function desplazar (){
 		$('.menu').toggleClass('menu-show');
    $('.hamburger_div').toggleClass('hamburger_div-slide');
 		$('#menuIconFirst').toggleClass('menuicon_first');
 		$('#menuIconSecond').toggleClass('menuicon_second');
 		$('#menuIconThird').toggleClass('menuicon_third');
 		$('.menuicon').toggleClass('menuicon-white');
 	}
 	$('#hamburger').on('click', function(e){
 		desplazar();
 		e.stopPropagation();
 		menuHideShow = $('.menu').hasClass('menu-show');
    menuIconWhite = $('.menuicon').hasClass('menuicon-white');
 		console.log(menuHideShow)
 	})

 	window.addEventListener('click', function(e){
 		if (menuHideShow = true && e.target.className != 'menu menu-show') {
 			$('.menu').removeClass('menu-show');
 			$('.hamburger_div').removeClass('hamburger_div-slide');
 			$('#menuIconFirst').removeClass('menuicon_first');
 			$('#menuIconSecond').removeClass('menuicon_second');
 			$('#menuIconThird').removeClass('menuicon_third');
 			$('.menuicon').removeClass('menuicon-white');
 			// e.stopPropagation();
 		}

 		console.log(e.target)
 	})




  // MENU COLOR CHANGE

	var header = $('#header').offset();
	var me = $('#me').offset();
  var skills = $('#skills').offset();
	var work = $('#work').offset();
	var photography = $('#photography').offset();
	var contact = $('#contact').offset();

	window.addEventListener('scroll', function(){
		if ($(window).scrollTop() >= me.top - 50) {
			$('.menuicon').addClass('menuicon-white-section');
		} else {
			$('.menuicon').removeClass('menuicon-white-section');
		}

    if ($(window).scrollTop() >= skills.top - 30) {
			$('.menuicon').removeClass('menuicon-white-section');
		}

		if ($(window).scrollTop() >= work.top) {
			$('.menuicon').removeClass('menuicon--black');
			$('.hamburger_div').removeClass('hamburger_div--black');
		}

		if ($(window).scrollTop() >= photography.top -100) {
			$('.menuicon').addClass('menuicon--black');
			$('.hamburger_div').addClass('hamburger_div--black');
		}

		if ($(window).scrollTop() >= contact.top - 50) {
			$('.menuicon').removeClass('menuicon--black');
			$('.hamburger_div').removeClass('hamburger_div--black');
		}
	})

	$(document).on('scroll', function(){
		var timelineEvent = document.querySelectorAll('.timeline_event')
		timelineEvent.forEach((evento, i) => {
			if ($(window).scrollTop() >= $('#me').offset().top - 80) {
				setTimeout(function(){
					 $(evento).addClass('timeline_event-show');
				 }, i * 200);

			} else {
				setTimeout(function(){
					 $(evento).removeClass('timeline_event-show');
				 }, i * 200);
			}
		})
	})



	// LETTERING

$('.letterings').lettering();
