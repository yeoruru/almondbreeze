'use strict';

//스크롤 
$(function() {            
    /*$('.next').on('click', function() {
        var index = $('.next').index($(this)); 
        var top = $('section:eq(' + index + ')').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });*/
    $('.back').on('click', function() {
        var index = $('.back').index($(this)); 
        var top = $('section:eq(' + index + ')').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });
});  

