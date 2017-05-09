var initTop = 0

$(document).ready(function(){
	$(".article").css({"top":window.innerHeight+"px"})

	if($(window).scrollTop()==0){
		$(".background").css({"opacity":"1"})
	}
	$(window).scroll(function(){

		var sc_1 = $("#sc_1").offset().top-480
		var sc_2 = $("#sc_2").offset().top-480
		var sc_3 = $("#sc_3").offset().top-480
		var sc_4 = $("#sc_4").offset().top-480

		if($(window).scrollTop()<sc_1){
			if(initTop<sc_1){
				$(".background").css({"opacity":"1"})
			}
			if(initTop>=sc_1){
			    $(".background").stop().animate({opacity:"1"},800,function(){
			    	 $(".background1").stop().animate({opacity:"0"},0)
			    })
			}
		}
		else if($(window).scrollTop()>=sc_1&&$(window).scrollTop()<sc_2){
			if(initTop<sc_1){
	            $(".background1").stop().animate({opacity:"1"},0,function(){
	            	$(".background").stop().animate({opacity:"0"},800)
	            })
        	}
        	if(initTop>=sc_2){
        		$(".background1").stop().animate({opacity:"1"},800,function(){
	            	$(".background2").stop().animate({opacity:"0"},0)
	            })
        	}
        }
		else if($(window).scrollTop()>=sc_2&&$(window).scrollTop()<sc_3){
			if(initTop<sc_2){
				$(".background2").stop().animate({opacity:"1"},0,function(){
	            	$(".background1").stop().animate({opacity:"0"},800)
	            })
			}
		    if(initTop>=sc_3){
        		$(".background2").stop().animate({opacity:"1"},800,function(){
	            	$(".background3").stop().animate({opacity:"0"},0)
	            })
        	}
		}
		else if($(window).scrollTop()>=sc_3&&$(window).scrollTop()<sc_4){
			if(initTop<sc_3){
				$(".background3").stop().animate({opacity:"1"},0,function(){
	            	$(".background2").stop().animate({opacity:"0"},800)
	            })
			}
			if(initTop>=sc_4){
				$(".background3").stop().animate({opacity:"1"},800,function(){
	            	$(".background4").stop().animate({opacity:"0"},0)
	            })
			}
		}
		else if($(window).scrollTop()>=sc_4){
			if(initTop<sc_4){
				$(".background4").stop().animate({opacity:"1"},0,function(){
	            	$(".background3").stop().animate({opacity:"0"},800)
	            })
			}
		}
	initTop = $(window).scrollTop()
	})

})

