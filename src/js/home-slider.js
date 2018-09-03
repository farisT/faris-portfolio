const container = document.querySelector('.slider-container-home');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
//position of the slider (when at first image it will be 0)
let position = 0;

var slidesNumber = slides.length;
var CounterTop = null;
const sliderCounter = document.querySelector('.vertical-slider-counter-home');
const arrowDown = document.querySelector('.arrow-down-home');
const arrowUp = document.querySelector('.arrow-up-home');
// function that moves the slides,
const moveSlide = function (value) {    
	console.log(' the value' , value)
	position += value*100; // value is * by 100 in order to use position for the slider styling (as the % so top:-100% would be the first picture)
	console.log(position);
	if(position === 0) {
		counterTop = 65
		sliderCounter.innerHTML = '1/3';
	}
	if(position === -100) {
		counterTop = 75;
		sliderCounter.innerHTML = '2/3';
		
	}
	if(position === -200) {
		counterTop = 90;
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
		}
		 else {
			position = (slidesNumber-1)*-100;
			console.log('else position',position)
			slider.style.top = position + '%';
			if(position === -200) {
				counterTop = 90;
				sliderCounter.innerHTML = '3/3';
			}
			sliderCounter.style.top = counterTop + '%'
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
			sliderCounter.style.top = 65 + '%'
			sliderCounter.innerHTML = '1/3';
	}
	console.log('next image', 'position', position,'slidenumber', slidesNumber);
});
