const pinkTriangleOne = document.querySelector('.project-page__pink-triangle-one');
const pinkTriangleTwo = document.querySelector('.project-page__pink-triangle-two');
const containerOne = document.querySelector('.animation-container-one');
const containerTwo = document.querySelector('.animation-container-two');

containerOne.addEventListener('mouseenter', function(){
    console.log('entering')
    if(window.innerWidth > 600){
    pinkTriangleOne.style.transition= '0.2s';
    pinkTriangleOne.style.width= '30%';
    pinkTriangleOne.style.bottom= '-19%';
    }
    if(window.innerWidth < 600){
        
    }
});
containerOne.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
    pinkTriangleOne.style.transition= '0.2s';
    pinkTriangleOne.style.width= '22%';
    pinkTriangleOne.style.bottom= '0%';
    }
    if(window.innerWidth < 600){

    }
});
containerTwo.addEventListener('mouseenter', function(){
    console.log('entering')
    console.log(window.innerWidth)
    if(window.innerWidth > 600){
    pinkTriangleTwo.style.transition= '0.2s';
    pinkTriangleTwo.style.width= '30%';
    pinkTriangleTwo.style.bottom= '6%';
    pinkTriangleTwo.style.transform= 'rotate(-20deg)';
    }
    if(window.innerWidth < 600){
        pinkTriangleTwo.style.width= '74%';
    }

});
containerTwo.addEventListener('mouseleave', function(){
    console.log('leaving');
    if(window.innerWidth > 600){
    pinkTriangleTwo.style.transition= '0.3s';
    pinkTriangleTwo.style.width= '25%';
    pinkTriangleTwo.style.bottom= '16%';
    pinkTriangleTwo.style.transform= 'unset';
    }
    if(window.innerWidth < 600){
        pinkTriangleTwo.style.width= '64%';
    }
});
