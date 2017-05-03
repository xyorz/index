var initTop = $(window).scrollTop()
$(document).ready(function(){
	if($(window).scrollTop()==0){
		$(".background").css({"opacity":"1"})
	}
	$(window).scroll(function(){
		if($(window).scrollTop()<320){
			if(initTop>=320){
			    $(".background").stop().animate({opacity:"1"},800,function(){
			    	 $(".background1").stop().animate({opacity:"0"},0)
			    })
			}
		}
		else if($(window).scrollTop()>=320&&$(window).scrollTop()<1120){
			if(initTop<320){
	            $(".background1").stop().animate({opacity:"1"},0,function(){
	            	$(".background").stop().animate({opacity:"0"},800)
	            })
        	}
        	if(initTop>=1120){
        		$(".background1").stop().animate({opacity:"1"},800,function(){
	            	$(".background2").stop().animate({opacity:"0"},0)
	            })
        	}
        }
		else if($(window).scrollTop()>=1120&&$(window).scrollTop()<1920){
			if(initTop<1120){
				$(".background2").stop().animate({opacity:"1"},0,function(){
	            	$(".background1").stop().animate({opacity:"0"},800)
	            })
			}
		    if(initTop>=1920){
        		$(".background2").stop().animate({opacity:"1"},800,function(){
	            	$(".background3").stop().animate({opacity:"0"},0)
	            })
        	}
		}
		else if($(window).scrollTop()>=1920&&$(window).scrollTop()<2720){
			if(initTop<1920){
				$(".background3").stop().animate({opacity:"1"},0,function(){
	            	$(".background2").stop().animate({opacity:"0"},800)
	            })
			}
			if(initTop>=2720){
				$(".background3").stop().animate({opacity:"1"},800,function(){
	            	$(".background4").stop().animate({opacity:"0"},0)
	            })
			}
		}
		else if($(window).scrollTop()>=2720){
			if(initTop<2720){
				$(".background4").stop().animate({opacity:"1"},0,function(){
	            	$(".background3").stop().animate({opacity:"0"},800)
	            })
			}
		}
	initTop = $(window).scrollTop()
	})
})

