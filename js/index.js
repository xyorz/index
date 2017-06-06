var initTop = 0

var downChange = function(num){
    $(".background"+num).stop().animate({opacity:"1"},0,function(){
		$(".background"+(num-1)).stop().animate({opacity:"0"},800)
	})
}
var upChange = function(num){
	$(".background"+num).stop().animate({opacity:"1"},800,function(){
    	$(".background"+(num+1)).stop().animate({opacity:"0"},0)
    })
}

var changeBackground = function(num){
	if($("#sc_"+(num+1)).length==0){
		var scThis = $("#sc_"+num).offset().top-480
		if($(window).scrollTop()>=scThis){
			if(initTop<scThis){
				downChange(num)
			}
		}
	}	
	else if($("#sc_"+num).length==0){
		var scNext = $("#sc_"+(num+1)).offset().top-480
		if($(window).scrollTop()<scNext){
			if(initTop<scNext){
				$(".background"+num).css({"opacity":"1"})
			}
			if(initTop>=scNext){
				upChange(num)
			}
		}
	}
	else{
		var scThis = $("#sc_"+num).offset().top-480
		var scNext = $("#sc_"+(num+1)).offset().top-480
		if($(window).scrollTop()>=scThis&&$(window).scrollTop()<scNext){
			if(initTop<scThis){
				downChange(num)
        	}
        	if(initTop>=scNext){
        		upChange(num)
        	}
        }
	}
}

$(document).ready(function(){
	$(".article").css({"top":window.innerHeight+"px"})
	if($(window).scrollTop()==0){
		$(".background0").css({"opacity":1})
	}
	$(window).scroll(function(){
		changeBackground(0)
		changeBackground(1)
		changeBackground(2)
		changeBackground(3)
		changeBackground(4)
		initTop = $(window).scrollTop()
	})
})
