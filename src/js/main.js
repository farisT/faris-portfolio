const homePageTriangle = document.querySelector('.homepage__image');
const sliderCounter = document.querySelector('.slider-counter');
const projectSlider = document.querySelector('.homepage-nested-grid-controlpanel')
const projectsNav = document.querySelector('.header__projects')

// homePageTriangle.addEventListener('mouseenter', function(){
//     console.log('entering')
// });
// homePageTriangle.addEventListener('mouseleave', function(){
//     console.log('leaving')
// });

// projectsNav.addEventListener('mouseenter', function(){
//     console.log('entering')
//     projectsNav.style.borderBottom = `7px $green solid`
    
// });
// projectsNav.addEventListener('mouseleave', function(){
//     console.log('leaving')
// });


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight ) {
      // you're at the bottom of the page
      console.log("Bottom of page");
      sliderCounter.innerHTML = `2/3`
      sliderCounter.style.marginTop = '15rem'

    }
    // else {
    //     sliderCounter.innerHTML = `1/3`
    //     sliderCounter.style.marginTop = '5rem'
    // }
};
