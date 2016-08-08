$(function(){
	$(".side-nav-2").click(function(){
		$(".portrait").animate({marginTop:'0'}, 500)
		.animate({marginLeft:'0'},500 );
		
		$("#menu-1").slideUp();
		$("#menu-4").slideUp();
		$("#menu-3").slideUp();
		$("#menu-2").slideDown();
return false;
	});

	$(".side-nav-3").click(function(){
		$(".portrait").animate({marginTop:'0'}, 500)
		.animate({marginLeft:'0'},500 );
		
		$("#menu-1").slideUp();
		$("#menu-2").slideUp();
		$("#menu-4").slideUp();
		$("#menu-3").slideDown();
		return false;
	});  

  $(".side-nav-4").click(function(){
		$(".portrait").animate({marginTop:'0'}, 500)
		.animate({marginLeft:'0'},500 );
		
		$("#menu-1").slideUp();
		$("#menu-2").slideUp();
		$("#menu-3").slideUp();
		$("#menu-4").slideDown();
		return false;
	});

  $(".side-nav-1").click(function(){
		$(".portrait").animate({marginTop:'120px'}, 500)
		.animate({marginLeft:'381px'},500 );
		
		$("#menu-1").show();
		$("#menu-2").hide();
		$("#menu-3").hide();
		$("#menu-4").hide();
		return false;
	});
$(".next").click(function(){
		if(!$(".hidden").is(":animated")){
	$(".hidden").animate({left:"-=817px"}, 1000);};
	     var lef=$(".hidden").css("left");
          num=parseInt(lef);
     if(num<-1630){
        $(".hidden").animate({left:"0px"}, 1);
    };  
	
});

$(".prev").click(function(){
   if(!$(".hidden").is(":animated")){
	$(".hidden").animate({left:"+=817px"}, 1000);}
	var lef=$(".hidden").css("left");
	num=parseInt(lef);
	if(num>-1){
      $(".hidden").animate({left:"0px"}, 1);
	};
});
$(".poetry-show").mousemove(function(){
	$(".poetry-hidden").animate({top:"-400px"},10000)
});


})