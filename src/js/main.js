// const homePageTriangle = document.querySelector('.homepage__image');
// const sliderCounter = document.querySelector('.slider-counter');
// const projectSlider = document.querySelector('.homepage-nested-grid-controlpanel')
// const projectsNav = document.querySelector('.header__projects')

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
var Carousel = {
    width: 100,     // Images are forced into a width of this many pixels.
    numVisible: 2,  // The number of images visible at once.
    duration: 600,  // Animation duration in milliseconds.
    padding: 2      // Vertical padding around each image, in pixels.
  };
  
  function rotateForward() {
    var carousel = Carousel.carousel,
        children = carousel.children,
        firstChild = children[0],
        lastChild = children[children.length - 1];
    carousel.insertBefore(lastChild, firstChild);
  }
  function rotateBackward() {
    var carousel = Carousel.carousel,
        children = carousel.children,
        firstChild = children[0],
        lastChild = children[children.length - 1];
    carousel.insertBefore(firstChild, lastChild.nextSibling);
  }
  
  function animate(begin, end, finalTask) {
    var wrapper = Carousel.wrapper,
        carousel = Carousel.carousel,
        change = end - begin,
        duration = Carousel.duration,
        startTime = Date.now();
    carousel.style.top = begin + 'px';
    var animateInterval = window.setInterval(function () {
      var t = Date.now() - startTime;
      if (t >= duration) {
        window.clearInterval(animateInterval);
        finalTask();
        return;
      }
      t /= (duration / 2);
      var top = begin + (t < 1 ? change / 2 * Math.pow(t, 3) :
                                 change / 2 * (Math.pow(t - 2, 3) + 2));
      carousel.style.top = top + 'px';
    }, 1000 / 60);
  }
  
  window.onload = function () {
    document.getElementById('spinner').style.display = 'none';
    var carousel = Carousel.carousel = document.getElementById('carousel'),
        images = carousel.getElementsByTagName('img'),
        numImages = images.length,
        imageWidth = Carousel.width,
        aspectRatio = images[0].width / images[0].height,
        imageHeight = imageWidth / aspectRatio,
        padding = Carousel.padding,
        rowHeight = Carousel.rowHeight = imageHeight + 2 * padding;
    carousel.style.width = imageWidth + 'px';
    for (var i = 0; i < numImages; ++i) {
      var image = images[i],
          frame = document.createElement('div');
      frame.className = 'pictureFrame';
      var aspectRatio = image.offsetWidth / image.offsetHeight;
      image.style.width = frame.style.width = imageWidth + 'px';
      image.style.height = imageHeight + 'px';
      image.style.paddingTop = padding + 'px';
      image.style.paddingBottom = padding + 'px';
      frame.style.height = rowHeight + 'px';
      carousel.insertBefore(frame, image);
      frame.appendChild(image);
    }
    Carousel.rowHeight = carousel.getElementsByTagName('div')[0].offsetHeight;
    carousel.style.height = Carousel.numVisible * Carousel.rowHeight + 'px';
    carousel.style.visibility = 'visible';
    var wrapper = Carousel.wrapper = document.createElement('div');
    wrapper.id = 'carouselWrapper';
    wrapper.style.width = carousel.offsetWidth + 'px';
    wrapper.style.height = carousel.offsetHeight + 'px';
    carousel.parentNode.insertBefore(wrapper, carousel);
    wrapper.appendChild(carousel);
    var prevButton = document.getElementById('prev'),
        nextButton = document.getElementById('next');
    prevButton.onclick = function () {
      prevButton.disabled = nextButton.disabled = true;
      rotateForward();
      animate(-Carousel.rowHeight, 0, function () {
        carousel.style.top = '0';
        prevButton.disabled = nextButton.disabled = false;
      });
    };
    nextButton.onclick = function () {
      prevButton.disabled = nextButton.disabled = true;
      animate(0, -Carousel.rowHeight, function () {
        rotateBackward();
        carousel.style.top = '0';
        prevButton.disabled = nextButton.disabled = false;
      });
    };
  };

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
