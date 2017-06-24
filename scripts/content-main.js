$(function(){
	var $main=$('#content #main');
	var timer=null,index=0,len=7;
	/*
	搜索框搜索词自动变化
	 */
	var data=['汽车香水','美的电压力锅','电动滑板车','友臣肉松饼','商务休闲鞋','618巅峰盛宴','小狗吸尘器'];
	$main.find('.center .input input').hover(function(){
		if(timer){ 
			clearInterval(timer);
		}
	 },function(){
		timer=setInterval(function(){
		    showImg(index);
			index++;
			if(index==len){index=0;}
		},2000);
	}).trigger("mouseleave");
	function showImg(index){
		$main.find('.center .input input').attr('placeholder',data[index]);//text(data[index]);
	}
	$main.find('.center .input input').click(function(){
		timer=null;
		$(this).get(0).value='';
	});
	/*
	字体换色
	 */
	$main.find('.info a').hover(function(){
		$(this).css('color','#f10215');
	},function(){
		if($(this).attr('class')!='device')
		$(this).css('color','#515151');
	});	
	$main.find('.butt a').hover(function(){
		$(this).css('color','#f10215');
	},function(){
		$(this).css('color','#515151');
	});
	/*
	购物车显示
	 */
	$main.find('.right .buycar').hover(function(){
		$(this).parent().find('.car').show();
	},function(){
		$(this).parent().find('.car').hide();
	});
	/*
	二维码显示手机京东
	 */
	$main.find('.right .pic').hover(function(){
		$('#header #shortcut .float-right .phone .handPhone').show();
	},function(){
		$('#header #shortcut .float-right .phone .handPhone').hide();
	});
});