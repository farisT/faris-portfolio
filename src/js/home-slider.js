const container = document.querySelector('.slider-container-home');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
//position of the slider (when at first image it will be 0)
let position = 0;

var slidesNumber = slides.length;
var counterLeft = null;
var counterTop = null;
const sliderCounter = document.querySelector('.vertical-slider-counter-home');
const horizontalSliderCounter = document.querySelector('.horizontal-slider-counter-home');
const arrowDown = document.querySelector('.arrow-down-home');
const arrowUp = document.querySelector('.arrow-up-home');
// function that moves the slides,
const moveSlide = function (value) {    
	console.log(' the value' , value)
	position += value*100; // value is * by 100 in order to use position for the slider styling (as the % so top:-100% would be the first picture)
	console.log(position);
	if(position === 0) {
		counterLeft = 15;
		counterTop = 57;
		sliderCounter.innerHTML = '<sup class="fraction-style">1</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
		horizontalSliderCounter.innerHTML = '<sup class="fraction-style">1</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
	}
	if(position === -100) {
		counterLeft = 45;
		counterTop = 75;
		sliderCounter.innerHTML = '<sup class="fraction-style">2</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
		horizontalSliderCounter.innerHTML = '<sup class="fraction-style">2</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
		
	}
	if(position === -200) {
		counterLeft = 85;
		counterTop = 90;
		sliderCounter.innerHTML = '<sup class="fraction-style">3</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
		horizontalSliderCounter.innerHTML = '<sup class="fraction-style">3</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
	}

	console.log(counterTop)
	slider.style.top = position + '%';
	sliderCounter.style.top = counterTop + '%'
	horizontalSliderCounter.style.left = counterLeft + '%'
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
				counterLeft = 85;
				sliderCounter.innerHTML = '<sup class="fraction-style">3</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
				horizontalSliderCounter.innerHTML  = '<sup class="fraction-style">3</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
			}
			sliderCounter.style.top = counterTop + '%';
			horizontalSliderCounter.style.left = counterLeft + '%';
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
			sliderCounter.style.top = 57 + '%';
			horizontalSliderCounter.style.left = 15 + '%'
			sliderCounter.innerHTML = '<sup class="fraction-style">1</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
			horizontalSliderCounter.innerHTML = '<sup class="fraction-style">1</sup ><span class="subfraction-style" >&frasl;</span><sub class="subfraction-style">3</sub></div>';
	}
	console.log('next image', 'position', position,'slidenumber', slidesNumber);
});
