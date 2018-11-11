window.onscroll = function(){

	if( document.documentElement.scrollTop >= 450 ){
		document.getElementById('scroll').style.display = "block";
	}else{
		document.getElementById('scroll').style.display = "none";
	}
}

$('#scroll').click(function(){
	$("html, body").animate({ scrollTop: 0 });
});