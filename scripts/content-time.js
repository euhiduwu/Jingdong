$(function(){
	var $time=$('#content #time .timefr-2 p');
	var interval=1000;
	function calTime(year,month,day1){
		var now = new Date(); 
		var endDate = new Date(year,month-1,day1); 
		var leftTime=endDate.getTime()-now.getTime(); 
		var leftsecond = parseInt(leftTime/1000);  
		var day=Math.floor(leftsecond/(60*60*24)); 
		var hour=Math.floor((leftsecond-day*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day*24*60*60-hour*3600-minute*60);
		hour=hour<10?'0'+hour:hour;
		minute=minute<10?'0'+minute:minute;
		second=second<10?'0'+second:second;
		$time.eq(0).text(hour);
		$time.eq(2).text(minute);
		$time.eq(4).text(second);
    }
	window.setInterval(function(){
		calTime(2017,6,23);
	},interval); 
});