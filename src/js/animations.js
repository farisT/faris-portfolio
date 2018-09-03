// const faceContainer = document.querySelector('.homeface-container')
// const homeFaceTriangle = document.querySelector('.homepage__image');
// const one = document.querySelector('.project-start')
// const container = document.querySelector('.slider-container')
// const two = document.querySelector('.two')
// const three = document.querySelector('.three')

// const options = {
//     rootMargin:"25px",
//     threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7 ,0.8, 0.9 ,1]
//   }
  
//   const io = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//       console.log("entry", entry.intersectionRatio);
//       console.log(entry.target.id);
//       entry.target.style.opacity = entry.intersectionRatio + 0.3;
//       if(entry.intersectionRatio === 1){
//         entry.target.innerHTML = "<h2>Loaded!</h2>";
//       }
//       else {
//         entry.target.innerHTML = "<h2>Unloaded!</h2>";
//       }
//     });
//   }, options);
  
//   const targetElements = document.querySelectorAll(".project ");
//   for(let element of targetElements){
//     io.observe(element);
//   }
  
  
// // faceContainer.addEventListener('mouseenter', function(){
// //     console.log('entering')
// //     if(window.innerWidth > 600){
// //         homeFaceTriangle.style.transition= '0.5s';
// //         // homeFaceTriangle.style.top= '15%';
// //         homeFaceTriangle.style.paddingLeft= '0%';
// //         homeFaceTriangle.style.transform= 'rotate(-15deg)';
// //         homeFaceTriangle.style.zIndex= '-1';
// //         // transform: rotate(-15deg);
// //     }
// //     if(window.innerWidth < 600){
// //         homeFaceTriangle.style.transition= '0.5s';
// //         homeFaceTriangle.style.top= '15%';
// //         homeFaceTriangle.style.left= '-8%';
// //         homeFaceTriangle.style.transform= 'rotate(-11deg)';
// //     }
// // });
// // faceContainer.addEventListener('mouseleave', function(){
// //     console.log('leaving');
// //     if(window.innerWidth > 600){
// //         homeFaceTriangle.style.transition= '0.5s';
// //         homeFaceTriangle.style.paddingLeft= '20%';
// //         homeFaceTriangle.style.transform= 'unset';
// //     }
// //     if(window.innerWidth < 600){
// //         homeFaceTriangle.style.transition= '0.5s';
// //         homeFaceTriangle.style.top= '22%';
// //         homeFaceTriangle.style.left= '0%';
// //         homeFaceTriangle.style.transform= 'unset';
// //     }
// // });

// function detectMouseWheelDirection( e )
// {
//     var delta = null,
//         direction = false
//     ;
//     if ( !e ) { // if the event is not provided, we get it from the window object
//         e = window.event;
//     }
//     if ( e.wheelDelta ) { // will work in most cases
//         delta = e.wheelDelta / 60;
//     } else if ( e.detail ) { // fallback for Firefox
//         delta = -e.detail / 2;
//     }
//     if ( delta !== null ) {
//         direction = delta > 0 ? 'up' : 'down';
//     }

//     return direction;
// }
// function handleMouseWheelDirection( direction )
// {
//     console.log( direction ); // see the direction in the console
//     if ( direction === 'down' ) {
//         // do something, like show the next page
//         // smoothScroll(two);
//     } else if ( direction == 'up' ) {
//         // do something, like show the previous page
//     } else {
//         // this means the direction of the mouse wheel could not be determined
//     }
// }
// container.onmousewheel = function( e ) {
//     handleMouseWheelDirection( detectMouseWheelDirection( e ) );
// };
// if ( window.addEventListener ) {
//     document.addEventListener( 'DOMMouseScroll', function( e ) {
//         handleMouseWheelDirection( detectMouseWheelDirection( e ) );
//     });
// }
