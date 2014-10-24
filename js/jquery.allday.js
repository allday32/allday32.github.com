$(document).ready(function(){
//부드러운 스크롤 효과
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 300);
    });
    // 스크롤시 탑고정
    var jbOffset = $( '.nav' ).offset();
    $( window ).scroll( function() {
        if ( $( document ).scrollTop() > jbOffset.top ) {
            $( '.nav' ).addClass( 'fixed_top' );
        }
        else {
            $( '.nav' ).removeClass( 'fixed_top' );
        }
    });
    // 스크롤 상하 제어
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.header_wrap').addClass('off'); // 스크롤을 내렸을경우
        } else {
            $('.header_wrap').removeClass('off'); // 스크롤을 올렸을경우
        }
        lastScrollTop = st;
    });
});
