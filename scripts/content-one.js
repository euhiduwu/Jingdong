$(function(){
	var $one=$('#content #one');
	var $hover=$one.find('.hover');
	var $center=$one.find('.center');
	var $right=$one.find('.right');
	var $left=$one.find('.left');
	var $cent=$right.find('.cent');
	var index;
	/*
	左侧栏鼠标滑动
	*/
	$left.find('ul').mouseover(function(e){
		var $target=$(e.target);
		index=$left.find('ul').index(this);
		if($target.attr('class')!='ita')
		    $target.css('color','#f10215');
	    $(this).css('background-color','#dbdbdb');
	    $center.hide();
	    $right.hide();
	    $hover.show();
	    if(index%2==0)
	    	$hover.find('.hrPhone').show();
	    else
	    	$hover.find('.technology').show();
	}).mouseout(function(e){
		var $target=$(e.target);
		$target.css('color','white');
	    $(this).css('background-color','rgb(105,105,105)');
	    $center.show();
	    $right.show();
	    $hover.hide();
	    if(index%2==0)
	    	$hover.find('.hrPhone').hide();
	    else
	    	$hover.find('.technology').hide();
	});
	/*
	详情页
	 */
	$hover.mouseover(function(){
		$(this).show();
	    $center.hide();
	    $right.hide();
	    if(index%2==0)
	    	$hover.find('.hrPhone').show();
	    else
	    	$hover.find('.technology').show();
	}).mouseout(function(){
		$center.show();
	    $right.show();
	    $hover.hide();
	    if(index%2==0)
	    	$hover.find('.hrPhone').hide();
	    else
	    	$hover.find('.technology').hide();
	});
	/*
	详情页字体换色
	 */
	$hover.find('a').hover(function(){
		$(this).css('color','#f10215');
	},function(){
		if($(this).attr('class')=='spe')
			$(this).css('color','white')
		else
		    $(this).css('color','#515151');
	});
	/*
	右侧登录界面字体换色
	*/
	$right.mouseover(function(e){
		var $target=$(e.target);
		var $parent=$target.parent();
		var className=$parent.attr('class');
		$target.css('color','#f10215');
		if(className=='new'||className=='plus'){
			$target.css('color','white');
			$parent.css('background-color','red');
		}
	}).mouseout(function(e){
		var $target=$(e.target);
		var $parent=$target.parent();
		var className=$parent.attr('class');
		$target.css('color','#515151');
		if(className=='new'||className=='plus')
			$target.css('color','#f10215');
			$parent.css('background-color','white');
	});
	/*
	促销公告栏变化
	 */
	$cent.find('.head li').mouseover(function(e){
		var $target=$(e.target);
		var index=$cent.find('.head ul li').index(this);
		$target.css('border-bottom','1px solid #f10215');
		if(index==0){
			$cent.find('.detail-1').show();
			$cent.find('.detail-2').hide();
		}
		else if(index==1){
			$cent.find('.detail-2').show();
			$cent.find('.detail-1').hide();
		}
	}).mouseout(function(e){
		var $target=$(e.target);
		var index=$cent.find('.head ul').index(this);
		$target.css('border-bottom','0px');
		
	});
	/*
	大屏广告
	 */
	var adTimer=null;
	var len=8;
	var $centerUp=$center.find('.centerUp');
	var $a=$centerUp.find('.dot a');
	var $li=$centerUp.find('ul li');
	var imgIndex=0;
	$a.mouseover(function(){
		imgIndex=$a.index(this);
		showImg(imgIndex);
	}).mouseout(function(){
		;
	}).eq(0).mouseover();
	/*
	滑入停止动画，滑出开始动画
	 */
	$centerUp.hover(function(){
		if(adTimer){ 
			clearInterval(adTimer);
		}
	},function(e){
		adTimer=setInterval(function(){
			//showDot(imgIndex);
			showImg(imgIndex);
		},3000);
	}).trigger('mouseleave');
	/*
	显示不同的广告图片
	*/
	function showImg(){
		$a.eq(imgIndex).css('background-color','red').siblings().css('background-color','white');
		$li.eq(imgIndex).stop(true,true).fadeIn().siblings().fadeOut();
		imgIndex++;
		if(imgIndex==len){
			imgIndex=0;
		}
	}
});