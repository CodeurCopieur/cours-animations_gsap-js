
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  smoothTouch: .1, // défillement appareils tactiles
  effects: true // ajouter des effets lisses
});

smoother.effects('.box', {
  speed: .5,
  lag: i => i * 1
})

// utiliser avec gsap et scrollTriger

gsap.to('.box-e', {
  rotate: 360,
  scrollTrigger: {
    trigger: '.box-e',
    //    Trigger Scroller
    start: 'center center',
    // markers: true,
    scrub: 1,
  }
})

//syntaxe simplifier

ScrollTrigger.create({
  trigger: '.box-c',
    pin: true,
    // markers: true,
    //    Trigger Scroller
    start: 'top center',
    end: '+=300px'
})

// Pause du défilement fluide

// Faites défiler facilement jusqu'à un certain point (payant)

// let btn  = document.querySelector('.button')

// btn.addEventListener('click', e => {
  // smoother.scrollTo('.box-f', true, 'center center')
  // pixel a la place de '.box-f'

  // gsap.to(smoother, {
  //   scrollTop:  smoother.offset(".box-f", true, "center center"),
  //   duration: 2,
  //   ease: 'back.out'
  // })
// })