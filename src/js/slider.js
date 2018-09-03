const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
//position of the slider (when at first image it will be 0)
let position = 0;

var slidesNumber = slides.length;

const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
// function that moves the slides,
const moveSlide = function (value) {    
	position += value*100; // value is * by 100 in order to use position for the slider styling (as the % so top:-100% would be the first picture)
	slider.style.top = position + '%';
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
	}
	console.log('next image', 'position', position,'slidenumber', slidesNumber);
});