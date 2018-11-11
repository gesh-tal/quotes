function showMenu(){
	document.getElementById("header_menu").style.display = "flex";
}

function closeMenu(){
	document.addEventListener('keyup', function(e) { 
    if (e.keyCode == 27) {
        closeMenu();
    }
});
	document.getElementById("header_menu").style.display = "none";
}

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 800);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});