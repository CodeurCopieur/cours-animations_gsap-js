
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  smoothTouch: .1, // défillement appareils tactiles
  effects: true // ajouter des effets lisses
});

// Faites défiler facilement jusqu'à un certain point

let btn  = document.querySelector('.button')

btn.addEventListener('click', e => {
  // smoother.scrollTo('.box-f', true, 'center center')
  // pixel a la place de '.box-f'

  // gsap.to(smoother, {
  //   scrollTop:  smoother.offset(".box-f", true, "center center"),
  //   duration: 2,
  //   ease: 'back.out'
  // })
})