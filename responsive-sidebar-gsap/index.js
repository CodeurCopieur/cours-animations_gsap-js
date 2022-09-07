/** Variables */

var navigationMenu = document.querySelector('.navigationMenu');
var trigger = navigationMenu.querySelector('.trigger');
var link = navigationMenu.querySelectorAll('.menu li');
var revealer = navigationMenu.querySelector('.revealer');
var menuWrapper = navigationMenu.querySelector('.menu-wrapper');

/** Timeline */
const tl = new TimelineMax();
var tlIn = new TimelineMax({paused:true, onCompleted: completed});
var tlOut = new TimelineMax({paused:true, onCompleted: completed});

var speed = .5;
var keyWord = "close";
var canAnimate = true;

/** SetMenuHeight */

function setMinuteHeight() {
  // tl.set('.menu li a', {color:"transparent"});
  tl.set(menuWrapper, {height: document.documentElement.clientHeight+"px"});
}
window.addEventListener('resize', function(){setMinuteHeight()})

function completed() {
  canAnimate = true;
}

function initSidebar() {
  setMinuteHeight();

  tlIn
    .fromTo( revealer, speed, 
      {x: '0%', width: '0%', ease: Expo.easeInOut}, {width: '100%', ease: Expo.easeInOut})
    .to(revealer, speed, { x: '100%', ease: Expo.easeInOut })
    .set(revealer, {x: '0%', width: '0%'})
    .fromTo(menuWrapper, speed, 
      {x: '-100%', ease: Expo.easeInOut}, { x: '0%', ease: Expo.easeInOut}, "-=0.5")
    .staggerFromTo(link, speed, 
      {x: '-120%'}, {x: '0%', ease: Expo.easeInOut}, 0.05, "-=.05")
    
  tlOut
      .fromTo( revealer, speed, 
        {x: '0%', width: '0%', ease: Expo.easeInOut}, {width: '100%', ease: Expo.easeInOut})
      .to(revealer, speed, { x: '100%', ease: Expo.easeInOut})
      .set(revealer, {x: '0%', width: '0%'})
      .to(menuWrapper, speed, {x: '100%', ease: Expo.easeInOut}, '-=.5')
      .set(menuWrapper, {x: '-100%'})


  trigger.onclick = function() {
    toggleMenu()
  };

  function toggleMenu() {
    
    navigationMenu.classList.toggle('active');

      if(keyWord == 'close') {
        tlIn.play(0);
        keyWord = "open";
      } else {
        tlOut.play(0);
        keyWord = "close";
      }
  }
}

function init(){
  initSidebar();

}

window.addEventListener('load', function(){
  init();
});