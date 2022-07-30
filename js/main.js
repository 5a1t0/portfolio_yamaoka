function animation(){
    $('.fade-inTrigger').each(function(){
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if(scroll > position - windowHeight + 40){
            $(this).addClass('fade-in');
        }else{
            $(this).removeClass('fade-in');
        }
    });
}

$(window).scroll(function(){
    animation();
});
