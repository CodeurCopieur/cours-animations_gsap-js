const src = [
    "ressources/spartan.svg",
    "ressources/castle.svg",
    "ressources/da-vinci.svg",
    "ressources/airplane.svg",
  ];
  
  const dates = [
    "-3300 | 476",
    "476 | 1492",
    "1492 | 1792",
    "1792 | AJD",
  ];

  ScrollTrigger.create({
    trigger: '.sections',
    pin: '.tooltip',
    //markers: true,
    start: 'top 40%',
    end: 'bottom 55%'
  })
  
const sections = gsap.utils.toArray('.section');

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    markers: true,
    onEnter: () => {
      gsap.set('.tooltip-img', {
        attr: {src: src[i]}
      })
      gsap.set('.tooltip p', {
        innerText: dates[i]
      })
    },
    onEnterBack: () => {
      gsap.set('.tooltip-img', {
        attr: {src: src[i]}
      })
      gsap.set('.tooltip p', {
        innerText: dates[i]
      })
    }
  })
});