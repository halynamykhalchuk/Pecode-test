$(function(){

    $('.menu-link').on('click',function(){
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('html').animate({
            scrollTop: top
        },1500, 'easeInOutCirc')
    })
    $('li').on('click',function(){
        let id = $(this).children('a').attr('href');
        let top = $(id).offset().top;
        $('html').animate({
            scrollTop: top
        },1500, 'easeInOutCirc')
        $(this).css('list-style-type','disc');
        
        
    })


})

function initMap(){
    let element = document.getElementById('map');
    let options = {
        zoom: 15,
        center:{lat: 49.842957, lng: 24.031111}
    }
    let myMap = new google.maps.Map(element, options)
}