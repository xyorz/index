var changeNextSection = function(){
	$("#section1").animate({"left":"-100%"})
	$("#section2").animate({"left":"0"})
}

var changeLastSection = function(){
	$("#section1").animate({"left":"100%"})
	$("#section0").animate({"left":"0%"})
}

var resetId = function(){
	$("#section1").attr("id","#section2")
	$("#section0").attr("id","#section1")
	$("#section2").attr("id","#section0")
	$("#section0").css({"left":"-100%"})
}
var tt = function(){
	$(document).ready(function(){
		$("#change_front").click(function(){
			$("#section1").animate({"left":"100%"})
			$("#section0").animate({"left":"0%"},function(){
				setTimeout(function(){
					resetId()
					$("#change_front").on("click",tt())
				},100)
			})
		})
	})
}
tt()

$(document).ready(function(){
	var num = 0
	$(".page").css({"height":window.innerHeight+"px"})
	$(".front").css({"height":window.innerHeight+"px"})
})


var safeDiv = function(num){
	$(".page").append("<div class=safe id=safe"+num+"></div>")
	$(".safe").css({"position":"absolute","z-index":"1000","height":"100%","width":"100%","opacity":"0"})
	if((num%2)!=0){
		$(".safe").css({"left":"-100%"})
	}
}

var changePage = function(num){
	var next = 0
	if((num%2)==0){
		next = num-1
	}
	else{
		next = num+1
	}
	$(document).ready(function(){
		$("#sc"+num).click(function(){
			$("#sc"+num).css({"animation":"hide .5s linear forwards"})
			safeDiv(num)
			setTimeout(function(){
				$("#sc"+next).css({"animation":"show .5s linear forwards"})
				setTimeout(function(){
					$("#safe"+num).remove();
				},500)
			},500)
		})
	})
}

var autoChangePage = function(num){
	var next = 0
	next = num-1
	$(document).ready(function(){
		$("#sc"+num).css({"animation":"hide .5s linear forwards"})
		safeDiv(num)
		setTimeout(function(){
			$("#sc"+next).css({"animation":"show .5s linear forwards"})
			setTimeout(function(){
				$("#safe"+num).remove();
			},500)
		},500)
	})
}

var goFirst = function(num){
	var i = num
	$(document).ready(function(){
		$("#sc"+(i-2)).click(function(){
			$(".page").append("<div id=lastSafe></div>")
			$("#lastSafe").css({"position":"absolute","height":"100%","width":"100%","z-index":$("#sc"+num).css("z-index")+0})
			setTimeout(function(){
				$("#lastSafe").remove()
			},1000)
		})
		$("#sc"+i).click(function(){
			if((i%2)!=0){
				i -= 1
			}
			for(;i>0;i-=2){
				autoChangePage(i)
			}
			i = num
		})
	})
}

var move = function(){
	$(document).ready(function(){
		$("#sc1").click(function(){
			setTimeout(function(){
				$(".page").stop().animate({"left":"50%"})
			},500)
		})
		$("#sc2").click(function(){
			setTimeout(function(){
				$(".page").stop().animate({"left":"30%"})
			},500)
		})
		$(".page").find("div").eq(-2).click(function(){
			setTimeout(function(){
				$(".page").stop().animate({"left":"30%"})
			},500)
		})
	})
}
move()
changePage(1)
changePage(2)
changePage(3)
changePage(4)
changePage(5)
changePage(6)
changePage(7)
changePage(8)
goFirst(9)