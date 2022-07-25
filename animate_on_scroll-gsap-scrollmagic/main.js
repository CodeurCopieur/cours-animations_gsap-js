document.addEventListener('DOMContentLoaded', () => {
  
  // init controller
  let controller = new ScrollMagic.Controller();

  let tl = new TimelineMax();

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

  
  let tl2 = new TimelineMax();
  tl2
  .to('.top .image-container', 4, {
    height: 0
  })

  let scene2 = new ScrollMagic.Scene({
      triggerElement: '.second-section',
      duration: '100%',
      triggerHook: 0,
      offset: '50'
    })
    .setTween(tl2)
    .setPin('.second-section')
    .addTo(controller);
  
  let tl3 = new TimelineMax();
  tl3
  .to('.section_3_01', 4, {
    y: -250,
    ease: Power3.easeInOut
  })
  .to('.section_3_02', 4, {
    y: -200,
    ease: Power3.easeInOut
  }, '-=4')
  .to('.section_3_03', 4, {
    y: -100,
    ease: Power3.easeInOut
  }, '-=4')
  .to('.section_3_04', 4, {
    y: 0,
    ease: Power3.easeInOut
  }, '-=4')
  .to('.section_3_05', 4, {
    y: 100,
    ease: Power3.easeInOut
  }, '-=4')
  .to('.section_3_06', 4, {
    y: 200,
    ease: Power3.easeInOut
  }, '-=4')


  let scene3 = new ScrollMagic.Scene({
      triggerElement: '.third-section',
      duration: '100%',
      triggerHook: 0,
      offset: '200'
    })
    .setTween(tl3)
    .setPin('.third-section')
    .addTo(controller);


});