const animationTriangle = document.querySelector('.image__outline')

animationTriangle.addEventListener('mouseenter', function(){
    if(window.innerWidth > 600){
        animationTriangle.style.transition= '0.2s';
        animationTriangle.style.width= '50%';
        animationTriangle.style.transform= 'rotate(-15deg)';  
    }
})

animationTriangle.addEventListener('mouseleave', function(){
    if(window.innerWidth > 600){
        animationTriangle.style.transition= '0.2s';
        animationTriangle.style.transform= 'rotate(0deg)';
        animationTriangle.style.width= 'unset';
    }
})