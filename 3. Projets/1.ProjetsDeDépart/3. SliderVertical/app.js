window.addEventListener('load', init)

function init () {

  const animation = gsap.timeline({repeat:-1})

  animation
  .to('.vertical-slider p', {autoAlpha: 1, y: 0, stagger: 1})
  .to('.vertical-slider p', {autoAlpha: 0, y: -100, stagger: 1}, 1)
  
}