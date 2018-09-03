// const homePageTriangle = document.querySelector('.homepage__image');
// const sliderCounter = document.querySelector('.slider-counter');
// const projectSlider = document.querySelector('.homepage-nested-grid-controlpanel')
// const projectsNav = document.querySelector('.header__projects')

// projectsNav.addEventListener('mouseenter', function(){
//     console.log('entering')
//     projectsNav.style.borderBottom = `7px $green solid`
    
// });
// projectsNav.addEventListener('mouseleave', function(){
//     console.log('leaving')
// });



window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}




// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight ) {
//       // you're at the bottom of the page
//       console.log("Bottom of page");
//       sliderCounter.innerHTML = `2/3`
//       sliderCounter.style.marginTop = '15rem'

//     }
    // else {
    //     sliderCounter.innerHTML = `1/3`
    //     sliderCounter.style.marginTop = '5rem'
    // }
// };
