gsap.to('.b2 h2', {
  duration: 1,
  y:0,
  scale: 2,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".b2 h2",
    markers: true,
    //    Trigger Scroller
    start: "top center", // 50% ou center-=200
    end: "center 20%"//`+=${document.querySelector(".b2 h2").offsetHeight}`
  }
})