// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//slide content //
// header fadesin
//$(function(){
// function h() {
//	 $('.yellow-icons').fadeIn(800);
// };
//window.setTimeout( h, 8300 );

//$(function(){
//  function h() {
//     $('.load1').fadeIn(1500);
//  };
// window.setTimeout( h, 3000 );
// });
//$(function(){
//  function j() {
//     $('.slide-it').fadeIn(100);
//  };
// window.setTimeout( j, 3730 );
// }); 

//});

$(document).ready(function() {


jQuery(function($){
    $.supersized({
    // Functionality
     slide_interval  :   5700,  // Length between transitions
     transition  :   1,   // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
     transition_speed  :  2200,  // Speed of transition
     stop_loop   :   1, 
     random  :   0,
     vertical_center   :   0,
     // Components  
     slide_links  :  'blank',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
     slides   :  [  // Slideshow Images
     {image : 'assets/aquarium.gif ', title : '', thumb : '', url : ''},
     ]
    });
});


$('#vertical_slide').hide();
$('#toggle_mover').hide();

$('#toggle').click(function() {
    $('#vertical_slide').slideToggle(1300, 'easeOutQuint', function () {
        $('#toggle').text(function (index, text) {
            return (text == '+' ? '-' : '+');
        });
    });
    $('#toggle_mover').slideToggle(1300, 'easeOutQuint', function () {
    });
    $('.mask-icons-container').fadeIn('100');
    return false;
});

$('#learn').click(function() {
    $('#vertical_slide').slideToggle(1300, 'easeOutQuint', function () {
        $('#toggle').text(function (index, text) {
            return (text == '+' ? '-' : '+');
        });
    });
    $('#toggle_mover').slideToggle(1300, 'easeOutQuint', function () {
    });
    $('.mask-icons-container').fadeIn('100');
    return false;
});

});

