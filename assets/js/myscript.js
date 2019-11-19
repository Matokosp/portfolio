

var md = window.matchMedia( "(min-width: 1000px)" );

  if (md.matches) {

    var cursor = document.getElementById('cursor');
    document.addEventListener ('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    })


    var circle = document.getElementsByClassName('circle');
     document.onmousemove = function(){
       var x = event.clientX * 100 / window.innerWidth + "%";
       var y = event.clientY * 100 / window.innerHeight + "%";
       //event.clientX => get the horizontal coordinate of the mouse
       //event.clientY => get the Vertical coordinate of the mouse
       //window.innerWidth => get the browser width
       //window.innerHeight => get the browser height

       for(var i=0;i<2;i++){
         circle[i].style.left = x;
         circle[i].style.top = y;
         circle[i].style.transform = "translate(-"+x+",-"+y+")";
       }
     }

  }


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
