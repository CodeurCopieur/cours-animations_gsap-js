const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const h1 = intro.querySelector('h1');

// End section
const section = document.querySelector('section');
const end = section.querySelector('h1');

// Scrollmagic
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  triggerElement: intro,
  duration: 9000,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

// Text Animation
const textAnim = TweenMax.fromTo(h1, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  duration: 3000,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// Video Animation
let accelamount = .5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = Math.ceil(e.scrollPos) / 1000;
})

setInterval(()=> {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay
}, 33.3)