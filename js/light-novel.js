
var createImg = function(sc,num){
	$(document).ready(function(){
		$("#n"+num).mouseenter(function(){
			$("#sc"+sc).append("<img src=img/light-novel/li"+num+".jpg style=position:absolute;top:0;left:0;width:100%;opacity:0 id=im"+num+">")
			$("#im"+num).stop().animate({opacity:"1"})
		})
		$("#n"+num).mouseout(function(){
			$("#im"+num).stop().animate({opacity:"0"},function(){
				$("#im"+num).remove()
			})
		})	
	})
}
createImg(1,1)
createImg(1,2)
createImg(1,3)
createImg(1,4)
createImg(2,5)
createImg(2,6)
createImg(2,7)
createImg(2,8)
createImg(3,9)
createImg(3,10)
createImg(3,11)
createImg(3,12)
createImg(4,13)
createImg(4,14)
createImg(4,15)
createImg(4,16)


$(document).ready(function(){
	$("#logo").animate({"left":"12%","opacity":"1"},800)
	$(".sc1,.sc2").css({"height":window.innerHeight*.5+"px"})
})