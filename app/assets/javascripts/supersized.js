jQuery(function($){
    $.supersized({
    // Functionality
     slide_interval  :   5700,  // Length between transitions
     transition  :   1,   // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
     transition_speed  :  3600,  // Speed of transition
     stop_loop   :   1, 
     random  :   0,
     vertical_center   :   0,
     // Components  
     slide_links  :  'blank',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
     slides   :  [  // Slideshow Images
     {image : 'assets/universe.gif ', title : '', thumb : '', url : ''},
     {image : 'assets/storyteller-is1.gif', title : '', thumb : '', url : ''},
	{image : 'assets/storyteller-is2.gif', title : '', thumb : '', url : ''},
     {image : 'assets/find-out.gif', title : '', thumb : '', url : ''},
     ]
    });
});
