
$(function() {
  event.preventDefault();
  $(".mouse").animate({marginTop:"23%"}, 1500);
  //$(".wifi").queue(function(){
  	$(".wifi").delay(1500);
  	$(".wifi").fadeIn(1000);
  	//$(this).dequeue();
	//});
});

$("#card").click(function(){
	$("#card").toggleClass("flipped");
}); //클래스를 삽입,삭제하여 object의 위치를 변환


$( "#hm" ).mouseenter(function() {
  $( "#hm" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#hm" ).mouseleave(function() {
  $( "#hm" ).animate({marginLeft: "0in"}, 150 );
});

$( "#ch" ).mouseenter(function() {
  $( "#ch" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#ch" ).mouseleave(function() {
  $( "#ch" ).animate({marginLeft: "0in"}, 150 );
});

$( "#pp" ).mouseenter(function() {
  $( "#pp" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#pp" ).mouseleave(function() {
  $( "#pp" ).animate({marginLeft: "0in"}, 150 );
});

$( "#op" ).mouseenter(function() {
  $( "#op" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#op" ).mouseleave(function() {
  $( "#op" ).animate({marginLeft: "0in"}, 150 );
});

$( "#ft" ).mouseenter(function() {
  $( "#ft" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#ft" ).mouseleave(function() {
  $( "#ft" ).animate({marginLeft: "0in"}, 150 );
});

$( "#insta" ).mouseenter(function() {
  $( ".img_li" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#insta" ).mouseleave(function() {
  $( ".img_li" ).animate({marginLeft: "0in"}, 150 );
});

$( "#naver" ).mouseenter(function() {
  $( ".img_li2" ).animate({marginLeft: "0.2in"}, 150 );
});
$( "#naver" ).mouseleave(function() {
  $( ".img_li2" ).animate({marginLeft: "0in"}, 150 );
});

jQuery(document).ready(function($) {	//html과 script가 준비된 시점
        $("#hm").click(function(event){           
                event.preventDefault(); //원래 실행될 기능 중지
                $('html,body').animate({scrollTop:$('#home').offset().top}, 900);
        });		//html body의 top을 offset으로 얻은 위치까지 스크롤 이동, 시간 900
        $("#ch").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$('#char_st').offset().top}, 900);
        });
        $("#pp").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$('#portpolio').offset().top}, 900);
        });
        $("#op").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$('#output').offset().top}, 900);
        });
        $("#ft").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$("#freetime").offset().top}, 900);
        });
        $("#in_txt").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$("#freetime").offset().top}, 900);
        });
        $("#0").click(function(event){            
                event.preventDefault();
                $("#0c").slideToggle(300);
        });
        $("#1").click(function(event){            
                event.preventDefault();
                $("#1c").slideToggle(300);
        });
        $("#2").click(function(event){            
                event.preventDefault();
                $("#2c").slideToggle(300);
        });
        $("#3").click(function(event){            
                event.preventDefault();
                $("#3c").slideToggle(300);
        });
        $("#4").click(function(event){            
                event.preventDefault();
                $("#4c").slideToggle(300);
        });
        $("#5").click(function(event){            
                event.preventDefault();
                $("#5c").slideToggle(300);
        });
        $("#6").click(function(event){            
                event.preventDefault();
                $("#6c").slideToggle(300);
        });
        $("#7").click(function(event){            
                event.preventDefault();
                $("#7c").slideToggle(300);
        });
        $("#listed").dblclick(function(event){            
                event.preventDefault();
                $(".line24").fadeToggle(300);
        });
});

//넓이 조절 시 max-width에 따라 애니매이션 속도가 달라짐
$( "#0" ).mouseenter(function() {
  $( "#0" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#0" ).mouseleave(function() {
  $( "#0" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#1" ).mouseenter(function() {
  $( "#1" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#1" ).mouseleave(function() {
  $( "#1" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#2" ).mouseenter(function() {
  $( "#2" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#2" ).mouseleave(function() {
  $( "#2" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#3" ).mouseenter(function() {
  $( "#3" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#3" ).mouseleave(function() {
  $( "#3" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#4" ).mouseenter(function() {
  $( "#4" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#4" ).mouseleave(function() {
  $( "#4" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#5" ).mouseenter(function() {
  $( "#5" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#5" ).mouseleave(function() {
  $( "#5" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#6" ).mouseenter(function() {
  $( "#6" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#6" ).mouseleave(function() {
  $( "#6" ).animate({opacity: 0.5, width: "80%"}, 400 );
});

$( "#7" ).mouseenter(function() {
  $( "#7" ).animate({opacity: 1, width: "100%"}, "slow" );
});
$( "#7" ).mouseleave(function() {
  $( "#7" ).animate({opacity: 0.5, width: "80%"}, 400 );
});


/*
$(function(){
	$("#slides").slidesjs({
    	navigation:{
    		active:false,
    		previous button: class="",
    		next button: class="",
    		effect: "slide"
    	}
    	effect:{
    		slide:{
    			speed: 200
    		}
    	}
    });
});
*/
/*
jQuery(document).ready(function($) {
	    $("#slides").slidesjs({
    	start:1,
    	navigation:{
    		active:!0,
    		//previous button: class="",
    		//next button: class="",
    		effect: "slide"
    	},
    	effect:{
    		slide:{
    			speed: 500
    		},
    		fade:{
    			speed:300,
    			crossfade:!0
    		}
    	},
    	callback:{
    		loaded:function(){},
    		start:function(){},
    		complete:function(){}
    	}
    });
});
*/