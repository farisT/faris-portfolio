const greenTriangleOne = document.querySelector('.project-page__green-triangle-one');
const greenTriangleTwo = document.querySelector('.project-page__green-triangle-two');
const linksTwo = document.querySelector('.project-page__links-two');
const containerOne = document.querySelector('.animation-container-one');
const containerTwo = document.querySelector('.animation-container-two');
const container = document.querySelector('.project-slider-container');
const slider = document.querySelector('.project-page-slider');
const slides = document.querySelectorAll('.project-page-slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');


containerOne.addEventListener('mouseenter', function(){
    console.log('entering')
    console.log(window.innerWidth);
    if(window.innerWidth > 600){
        greenTriangleOne.style.transition= '0.5s';
        greenTriangleOne.style.width= '32%';
        greenTriangleOne.style.bottom= '-27%';
     
        greenTriangleOne.style.transform= 'rotate(-55deg)';
    }
   
});
containerOne.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
        greenTriangleOne.style.transition= '0.2s';
        greenTriangleOne.style.width= '22%';
        greenTriangleOne.style.bottom= '0%';
        
        greenTriangleOne.style.transform= 'unset';  
    }

});
containerTwo.addEventListener('mouseenter', function(){
    console.log('entering')
    if(window.innerWidth > 600){
        greenTriangleTwo.style.transition= '0.2s';
        greenTriangleTwo.style.width= '25%';
        greenTriangleTwo.style.right= '-6%';
        greenTriangleTwo.style.bottom= '0%';
    }
    
});
containerTwo.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
        greenTriangleTwo.style.transition= '0.3s';
        greenTriangleTwo.style.width= '20%';
        greenTriangleTwo.style.bottom= '0%';
        greenTriangleTwo.style.right= '0%';
    }
});

let position = 0;

var slidesNumber = slides.length;



// function that moves the slides,
const moveSlide = function (value) {    
    position += value*100; // value is * by 100 in order to use position for the slider styling (as the % so left:-100% would be the first picture)
    slider.style.left = position + '%';
};

var intervalHandle = null; // this variable controls the starting and stopping of the sliders.

leftArrow.addEventListener("click",function() { 
console.log('moving')
    //this is a check to see if the slider is at the beginning, if it isnt go backwards
    if(position !== 0) {
             moveSlide(1);
        } else {
            position = (slidesNumber-1)*-100;
            slider.style.left = position + '%';  
        }
    console.log('previous image');
});

rightArrow.addEventListener("click", function() { 

    // else check is to see if the slider reaches 3 then it will return the postion to the start - to stop it from going further than the slide length

    if(position > (slidesNumber-1)*-100){
        moveSlide(-1);
    } else {
            position = 0;
            slider.style.left = position + '%'; 
    }
    console.log('next image', position, slidesNumber);
});