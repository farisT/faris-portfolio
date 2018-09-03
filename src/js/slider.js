const container = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
//position of the slider (when at first image it will be 0)
let position = 0;

var slidesNumber = slides.length;
var CounterTop = null;
const sliderCounter = document.querySelector('.vertical-slider-counter');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
// function that moves the slides,
const moveSlide = function (value) {    
	console.log(' the value' , value)
	position += value*100; // value is * by 100 in order to use position for the slider styling (as the % so top:-100% would be the first picture)
	console.log(position);
	if(position === -100) {
		counterTop = 40;
		sliderCounter.innerHTML = '2/3';
		
	}
	if(position === -200) {
		counterTop = 70;
		sliderCounter.innerHTML = '3/3';
	}
	console.log(counterTop)
	slider.style.top = position + '%';
	sliderCounter.style.top = counterTop + '%'
};

var intervalHandle = null; // this variable controls the starting and stopping of the sliders.

// clicking play will start the setInterval


//clicking pause will clear the setInterval
arrowUp.addEventListener("click",function() { 

	//this is a check to see if the slider is at the beginning, if it isnt go backwards
	if(position !== 0) {
			 moveSlide(1);
		} else {
			position = (slidesNumber-1)*-100;
			slider.style.top = position + '%';
		}
	console.log('previous image');
});

arrowDown.addEventListener("click", function() { 

	// else check is to see if the slider reaches 3 then it will return the postion to the start - to stop it from going further than the slide length

	if(position > (slidesNumber-1)*-100){
		moveSlide(-1);
	} else {
			position = 0;
			slider.style.top = position + '%'; 
			sliderCounter.style.top = 5 + '%'
			sliderCounter.innerHTML = '1/3';
	}
	console.log('next image', 'position', position,'slidenumber', slidesNumber);
});

// function detectMouseWheelDirection( e )
// {
//     var delta = null,
//         direction = false
//     ;
//     if ( !e ) { // if the event is not provided, we get it from the window object
//         e = window.event;
//     }
//     if ( e.wheelDelta ) { // will work in most cases
//         delta = e.wheelDelta / 60;
//     } else if ( e.detail ) { // fallback for Firefox
//         delta = -e.detail / 2;
//     }
//     if ( delta !== null ) {
//         direction = delta > 0 ? 'up' : 'down';
//     }

//     return direction;
// }
// function handleMouseWheelDirection( direction )
// {
//     console.log( direction ); // see the direction in the console
//     if ( direction = 'down' ) {
//         // do something, like show the next page
// 		if(position > (slidesNumber-1)*-100){
// 			moveSlide(-1);
// 		} else {
// 				position = 0;
// 				slider.style.top = position + '%'; 
// 		}
//     } else if ( direction == 'up' ) {
// 		if(position !== 0) {
// 			moveSlide(1);
// 	   } else {
// 		   position = (slidesNumber-1)*-100;
// 		   slider.style.top = position + '%';  
// 	   }
//    console.log('previous image');
//         // do something, like show the previous page
//     }
// }
// container.onmousewheel = function( e ) {
// 	e.preventDefault()
//     handleMouseWheelDirection( detectMouseWheelDirection( e ) );
// };
// if ( window.addEventListener ) {
//     document.addEventListener( 'DOMMouseScroll', function( e ) {
// 		e.preventDefault()
//         handleMouseWheelDirection( detectMouseWheelDirection( e ) );
//     });
// }