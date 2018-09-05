const blueTriangleOne = document.querySelector('.project-page__blue-triangle-one');
const blueTriangleTwo = document.querySelector('.project-page__blue-triangle-two');
const linksTwo = document.querySelector('.project-page__links-three');
const containerOne = document.querySelector('.animation-container-one');
const containerTwo = document.querySelector('.animation-container-two');

containerOne.addEventListener('mouseenter', function(){
    console.log('entering')
    console.log(window.innerWidth);
    if(window.innerWidth > 600){
        blueTriangleOne.style.transition= '0.2s';
        blueTriangleOne.style.width= '42%';
        blueTriangleOne.style.bottom= '-27%';
        blueTriangleOne.style.transform= 'rotate(-10deg)';
    }
   
});
containerOne.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
        blueTriangleOne.style.transition= '0.2s';
        blueTriangleOne.style.width= '40%';
        blueTriangleOne.style.bottom= '-50%';
        blueTriangleOne.style.transform= 'unset';  
    }

});
containerTwo.addEventListener('mouseenter', function(){
    console.log('entering')
    if(window.innerWidth > 600){
        blueTriangleTwo.style.transition= '0.2s';
        blueTriangleTwo.style.width= '30%';
        blueTriangleTwo.style.paddingTop= '3rem';
        linksTwo.style.right= '5%';
        // blueTriangleTwo.style.transform= 'rotate(20deg)';
    }
    
});
containerTwo.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
        blueTriangleTwo.style.transition= '0.3s';
        blueTriangleTwo.style.width= '25%';
        blueTriangleTwo.style.paddingTop= '3rem';
        blueTriangleTwo.style.transform= 'unset';
        linksTwo.style.right= '5%';
    }
});