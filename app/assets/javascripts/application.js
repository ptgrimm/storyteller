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
//
//
//slide content //
$('.slide-it').click(function(e){
    $('.i-slide').slideToggle();
});



// header fadesin
//$(function(){
// function h() {
//	 $('.yellow-icons').fadeIn(800);
// };
//window.setTimeout( h, 8300 );
//});


// button appears
 $(function(){
  function h() {
	 $('.load1').fadeIn(1500);
  };
 window.setTimeout( h, 3000 );
 });

 $(function(){
  function j() {
	 $('.load2').fadeIn(1000);
  };
 window.setTimeout( j, 3730 );
 });
