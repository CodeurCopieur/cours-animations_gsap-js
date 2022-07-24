document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();
  // init controller
  let controller = new ScrollMagic.Controller();

  tl
    .from('.section_1_01', 4, {
      y: -100,
      x: -150,
      ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
      y: -150,
      x: -250,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
      y: -80,
      x: -100,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
      y: -100,
      x: -150,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
      y: -80,
      x: -200,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
      y: -100,
      x: -350,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
      y: -50,
      x: -150,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
      y: 50,
      x: -350,
      ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
      y: 100,
      x: -200,
      ease: Power3.easeInOut
    }, '-=4')

  let scene = new ScrollMagic.Scene({
      triggerElement: '.first-section',
      duration: '100%',
      triggerHook: 0,
      offset: '300'
    })
    .setTween(tl)
    .setPin('.first-section')
    .addTo(controller);
});