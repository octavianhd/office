//Services and team width fix

if ($("#serv99").width()>770){
  $("#services .col-md-8").css("padding","5% 5%");
};
if ($("#work99").height()>400){
  $("#team .col-md-8").css("height","400px").css("padding","0% 7.5%");
  $(".team-img2").css("margin","-18.5% 0");
};
if ($("#work99").height()<350){
  $("#team .col-md-8").css("height","400px").css("padding","0% 8%");
};

//Projects divs
$(document).ready(function(){
  //hover
  $("#imac-link").hover(function(){
    $(this).attr("src","pics/mac1.png");
  },function(){
    $(this).attr("src","pics/mac.png");
  });
  $("#ipad-link").hover(function(){
    $(this).attr("src","pics/tab1.png");
  },function(){
    $(this).attr("src","pics/tab.png");
  });
  $("#iphone-link").hover(function(){
    $(this).attr("src","pics/mob1.png");
  },function(){
    $(this).attr("src","pics/mob.png");
  });
  //click
  $("#imac-link").click(function(){
    $("#ipad").hide();
    $("#iphone").hide();
    $("#imac").show();
  });
  $("#ipad-link").click(function(){
    $("#imac").hide();
    $("#iphone").hide();
    $("#ipad").show();
  });
  $("#iphone-link").click(function(){
    $("#imac").hide();
    $("#ipad").hide();
    $("#iphone").show();
  });
});

//owl carousel
  
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 1
  });
});