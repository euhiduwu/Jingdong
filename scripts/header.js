$(function(){
	/*
	状态栏位置信息
	 */
	$('.float-left .down').hover(function(){
		$(this).css('backgroundColor','white').find('a').css('color','#f10215').end().find('.location').show();
		var $text=$(this).find('a:first');
		var $li=$(this).find(".location li:contains('"+$text.html()+"')");
		$li.css('backgroundColor','#f10215');
		$(this).find('.location li').click(function(e){
				var $text=$('.float-left .down').find('a:first');
		        var $li=$(this).parent().find("li:contains('"+$text.html()+"')");
				$li.css('backgroundColor','white');
				$(this).css('backgroundColor','#f10215');
				var text=$(this).text();
				$text.text(text);
			}).mouseover(function(e){
				var $target=$(e.target);
				if($target.text()!=$text.text())
				$target.css('backgroundColor','#e6e6e6');
			}).mouseout(function(e){
				var $target=$(e.target);
				if($target.text()!=$text.text())
				$target.css('backgroundColor','white');
			});
	},function(){
		$(this).css('backgroundColor','#e6e6e6').find('a').css('color','#515151').end().find('.location').hide();
	});
	/*
	我的京东
	 */
	$('.float-right .own').hover(function(){
		$(this).css('backgroundColor','white').find('a').css('color','#f10215').end().css('color','#f10215').find('.owner').show();
	},function(){
		$(this).css('backgroundColor','#e6e6e6').find('a').css('color','#515151').end().find('.owner').hide();
	}).find('.owner li').hover(function(){
		$(this).css('color','#f10215');
	},function(){
		$(this).css('color','#515151');
	});
	/*
	客户服务
	 */
	$('.float-right .cus').hover(function(){
		$(this).css('backgroundColor','white').find('a').css('color','#f10215').end().find('.customerService').show();
	},function(){
		$(this).css('backgroundColor','#e6e6e6').find('a').css('color','#515151').end().find('.customerService').hide();
	}).find('.customerService li').hover(function(){
		$(this).css('color','#f10215');
	},function(){
		$(this).css('color','#515151');
	});
	/*
	网址导航
	 */
	$('.float-right .href').hover(function(){
		$(this).css('backgroundColor','white').find('a').css('color','#f10215').end().find('.webSite').show();
	},function(){
		$(this).css('backgroundColor','#e6e6e6').find('a').css('color','#515151').end().find('.webSite').hide();
	}).find('.webSite li').hover(function(){
		$(this).css('color','#f10215');
	},function(){
		if($(this).attr('class')!='caption')
		$(this).css('color','#515151');
	});
	/*
	手机京东
	 */
	$('.float-right .phone').hover(function(){
		$(this).css('backgroundColor','white').find('a:first').css('color','#f10215').end().find('.handPhone').show();
	},function(){
		$(this).css('backgroundColor','#e6e6e6').find('a:first').css('color','#515151').end().find('.handPhone').hide();
	});
	/*
	我的订单，京东会员，企业采购
	 */
    $('.float-right .order').hover(function(){
    	$(this).css('color','#f10215');
    },function(){
    	$(this).css('color','#515151');
    });
    $('.float-right .vip').hover(function(){
    	$(this).css('color','#f10215');
    },function(){
    	$(this).css('color','#515151');
    });
    $('.float-right .buy').hover(function(){
    	$(this).css('color','#f10215');
    },function(){
    	$(this).css('color','#515151');
    });
});