const allBlocs = document.querySelectorAll('.bloc');

const allOffsets = [105,206,848];


gsap.utils.toArray(['.bloc2', '.bloc3', '.bloc4']).forEach((bloc, i) => {
  
  gsap.to(bloc, {
    y:0,
    ease: "none",
    scrollTrigger: {
      trigger: '.container-scroll',
      //markers: true,
      start: 'top bottom-=370px',
      end: `+=${allOffsets[i]}`,
      scrub: 1
    }
  })
});

allBlocs.forEach( (bloc, i) => {

  if(i ===3) {
    gsap.set(bloc, {
      scrollTrigger: {
        trigger: bloc,
        markers: true,
        start: 'top+=150 center',
        scrub: 1,
        onEnter: () => {
          bloc.classList.add('active')
        },
        onLeaveBack: () => {
          bloc.classList.remove('active')
        }
      }
    })
    return;
  }

  gsap.set(bloc, {
    scrollTrigger: {
      trigger: bloc,
      markers: true,
      start: 'top center+=100',
      scrub: 1,
      onEnter: () => {
        bloc.classList.add('active')
      },
      onLeaveBack: () => {
        bloc.classList.remove('active')
      }
    }
  })
});