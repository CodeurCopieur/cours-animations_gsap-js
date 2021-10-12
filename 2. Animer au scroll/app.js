gsap.to('.b2 h2', {
  duration: 1,
  y:0,
  scale: 2,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".b2 h2",
    markers: true,
    scrub: 1,
    //    Trigger Scroller
    start: "top 20%", // 50% ou center-=200
    end: "bottom 10%",//`+=${document.querySelector(".b2 h2").offsetHeight}`
    // onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "play pause reverse reset",
    // play pause resume reset restart complete reverse none
    onEnter: () => console.log('Enter'),
    onLeave: () => console.log('Leave'),
    onEnterBack: () => console.log('EnterBack'),
    onLeaveBack: () => console.log('LeaveBack'),
  }
})

/*gsap.to('.b2', {
  scrollTrigger: {
    trigger: '.b2',
    pin: true,
    markers: true
  }
})*/

//syntaxe simplifier

ScrollTrigger.create({
  trigger: '.b2',
    pin: true,
    //markers: true,
    //    Trigger Scroller
    end: 'bottom 50%'
})