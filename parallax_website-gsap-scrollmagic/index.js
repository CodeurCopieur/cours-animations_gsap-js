document.addEventListener('DOMContentLoaded', () => {
  
  // init controller
  let controller = new ScrollMagic.Controller();

  let tl = new TimelineMax();

  tl
    .to('.rock', 3, { y: -300 })
    .to('.girl', 3, { y: -200 }, "-=3")
    .fromTo('.bg1', { y: -50 }, { y: 0, duration: 3 }, "-=3")
    .to('.content', 3, { top: '0%' }, "-=3")
    .fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 3})
    .fromTo('.text', { opacity: 0 }, { opacity: 1, duration: 3})

  let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '300%',
    triggerHook: 0,
    })
    .setTween(tl)
    .setPin('section')
    .addTo(controller);
});