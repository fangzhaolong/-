$(function(){
	
	$(".nav .navcontent a").each(function(k,v){
		$(v).on("mouseenter",function(){
			
			//console.log($(this).index())
			$(this).children("img").addClass("menter")
			$(this).siblings().children("img").removeClass("menter")
			/*$(".introduction .introductionxx").each(function(k,v){
				$(v).removeClass("pp")
			})
			$(".introduction .introductionxx").eq($(this).index()).addClass("pp")*/
		})
		
		$(v).on("click",function(){
			
			$(".introduction .introductionxx").each(function(k,v){
				$(v).removeClass("pp")
				
			})
			
			$(".introduction .introductionxx").eq($(this).index()).addClass("pp")
		})
		/*console.log(a)
		$(v).on("mouseleave",function(){
			$(".introduction .introductionxx").each(function(k,v){
				$(v).removeClass("pp")
			})
			$(".introduction .introductionxx").eq(0).addClass("pp")
		})*/
	})
	$(".nav .navcontent a").each(function(k,v){
		$(v).on("click",function(){
			$(this).children("img").addClass("mdown");
			$(this).siblings().children("img").removeClass("mdown")
		})
	})
	
	
	
	var $a = 0;
	
	$(".content ul li").find("img").css({"width":"10px","height":"10px","marginTop":"0px","marginLeft":"0px"});
	$(".content ul li").eq($a).find("img").css({"width":"20px","height":"20px","marginTop":"-6px","marginLeft":"-5px"});
	$(".content ul li").each(function(k,v){
		$(v).on("mouseenter",function(){
			$(this).find("img").css({"width":"20px","height":"20px","marginTop":"-6px","marginLeft":"-5px"});
			$(this).siblings().find("img").css({"width":"10px","height":"10px","marginTop":"0px","marginLeft":"0px"})
			
		})
	})
	
	$(".navcontent").on("mouseleave",function(){
		$(this).children("a").children("img").removeClass("menter")
	})
})
