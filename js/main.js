$( function() {
  $( "#datepicker" ).datepicker();
  $( "#datepicker" ).datepicker( "option", "showAnim", "slideDown" );
  $( "#datepickerz" ).datepicker();
  $( "#timepicker" ).datepicker();

  

  
 
});


$('#main-slider').vegas({
  //overlay: true,
  timer: false,
  transition: 'fade', 
  transitionDuration: 4000,
  delay: 10000,
  animation: 'random',
  animationDuration: 20000,
  slides: [
    { src: "images/slider-bg-0.png" },
    { src: "images/slider-bg-1.png" },
    { src: "images/slider-bg-2.jpg" },
    { src: "images/home-slider-2.jpg" },
    { src: "images/slider-bg-3.png" }
    
  ]
});

if ( $( '.beautypress-3d-project-card' ).length > 0 ) {
  $( '.beautypress-3d-project-card' ).tilt( {
  maxTilt:20,
    perspective: 700,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale:1,
    speed: 500,
    transition: true,
  } );
    }

  if ( $( '.movie-card' ).length > 0 ) {
  $( '.project_card' ).tilt( {
  maxTilt:25,
    perspective: 700,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale:1,
    speed: 400,
    transition: true,
  } );
    }

