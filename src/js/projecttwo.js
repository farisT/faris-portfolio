const greenTriangleOne = document.querySelector('.project-page__green-triangle-one');
const greenTriangleTwo = document.querySelector('.project-page__green-triangle-two');
const containerOne = document.querySelector('.animation-container-one');
const containerTwo = document.querySelector('.animation-container-two');

containerOne.addEventListener('mouseenter', function(){
    console.log('entering')
    console.log(window.innerWidth);
    if(window.innerWidth > 600){
        greenTriangleOne.style.transition= '0.2s';
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
        greenTriangleTwo.style.width= '30%';
        greenTriangleTwo.style.bottom= '6%';
        greenTriangleTwo.style.transform= 'rotate(-20deg)';
    }
    
});
containerTwo.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
        greenTriangleTwo.style.transition= '0.3s';
        greenTriangleTwo.style.width= '25%';
        greenTriangleTwo.style.bottom= '16%';
        greenTriangleTwo.style.transform= 'unset';
    }
});

// width: 32%;
// bottom: -27%;
// transform: rotate(-55deg);

//home triangle change
// top: 15%;
// left: -8%;
// transform: rotate(-11deg);