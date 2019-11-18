var cursor = document.getElementById('cursor');
document.addEventListener ('mouseover', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
})




// var circle = document.getElementsByClassName('circle');
//  document.onmousemove = function(){
//    var x = event.clientX * 100 / window.innerWidth + "%";
//    var y = event.clientY * 100 / window.innerHeight + "%";
//    //event.clientX => get the horizontal coordinate of the mouse
//    //event.clientY => get the Vertical coordinate of the mouse
//    //window.innerWidth => get the browser width
//    //window.innerHeight => get the browser height
//
//    for(var i=0;i<2;i++){
//      circle[i].style.left = x;
//      circle[i].style.top = y;
//      circle[i].style.transform = "translate(-"+x+",-"+y+")";
//    }
//  }
