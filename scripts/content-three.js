$(function(){
	var $thr=$('#content #three .thr');
	var $head=$thr.find('.thrhead');
	var $choice=$thr.find('.thrchoice');
	var $div=$thr.find('.thrblock-1');
	var $li=$choice.find('li');
	var index=0;
	$li.hover(function(){
		index=$li.index(this);
		$li.eq(index).css('border-bottom','1px solid #f10215')
		    .siblings().css('border-bottom','1px solid #e7e7e7');
	    $div.eq(index).show().siblings().hide();
	    $head.show();
	    $choice.show();
	},function(){
		;
	}).eq(0).mouseover();
});