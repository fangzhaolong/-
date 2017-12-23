$(function(){
	
	$(".resume ul li>p").on("click",function(){
		
		$(this).children("i").children("img").attr("src",'img/top.png')
		$(this).parent().siblings().children("p").children("i").children("img").attr("src",'img/bottom.png')
		$(this).parent().siblings().children("div").stop(true).animate({"height":"0px"},500)
		$(this).parent().children("div").stop(true).animate({'height':"264px"},500)
		

		
	})
})
