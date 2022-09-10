function initScroll() {
  // register scrolltrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger MatchMedia -> responsive animation.
  // animé uniquement sur les appareils de bureau et supérieurs

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".product_image",
          markers: true,
          start: "top+=10 10%",
          end: "bottom-=10 10%",
          scrub: true,
          pin: true
        }
      });
      tl.to('.step_one_content', 
        {autoAlpha: 0, duration: .5})
        .to('.product_image', 
        {x: '-100%', duration: 1}) // déplacer l'image vers la gauche
        .fromTo('.step_two_content', 
        {autoAlpha: 0}, {autoAlpha: 1}) // monter la deuxième blocs html
    }
  })
}

function init(){
  initScroll();

}
// permet d'animer en utilisant gsap
window.addEventListener('load', function(){
  init();
});