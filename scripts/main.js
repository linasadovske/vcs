$(document).ready(function(){
    $('.information').on('click', function(){
        $(this).find('.info-box').toggleClass('show');
    })
    $('.alt-menu').on('click', function(){
        $('.main-nav').toggleClass('show');
    })
})