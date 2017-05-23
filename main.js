var  nav = $(".nav-bar");
var  stick = "nav-bar-sticky";
    topheight = 1225;

$(window).scroll(function(){
   if($(this).scrollTop() > topheight){
      nav.addClass(stick);
   }
   else {
      nav.removeClass(stick);
   }

});
