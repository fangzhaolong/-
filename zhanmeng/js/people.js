$(function(){
	$("#contentbox ul li").each(function(k,v){
		$(v).on("mouseenter",function(){
			$(this).siblings().children("div").removeClass("divimg")
			$(this).children("div").addClass("divimg")
			var b = $(this).children("img").attr("src");
		 	var c = b.split(".")
		 	c[0] = c[0]+"-大";
		 	var d = c.join(".")
			$(".cright img").attr("src",d)
		})
		
	})
})
