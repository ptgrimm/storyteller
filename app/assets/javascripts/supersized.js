jQuery(function($){
    $.supersized({
    // Functionality
     slide_interval  :   7500,  // Length between transitions
     transition  :   1,   // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
     transition_speed  :  1800,  // Speed of transition
     stop_loop   :   0, 
     random  :   1,
     vertical_center   :   0,
     // Components  
     slide_links  :  'blank',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
     slides   :  [  // Slideshow Images
     {image : 'assets/kafka.gif ', title : '', thumb : '', url : ''},
     {image : 'assets/krishna.gif', title : '', thumb : '', url : ''},
     {image : 'assets/marquez.gif', title : '', thumb : '', url : ''},
     {image : 'assets/rumi.gif', title : '', thumb : '', url : ''},
     {image : 'assets/rukeyser.gif', title : '', thumb : '', url : ''},
     ]
    });
});
