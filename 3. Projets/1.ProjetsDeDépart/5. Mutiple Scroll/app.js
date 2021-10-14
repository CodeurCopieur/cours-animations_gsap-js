const longMountains = document.querySelector('.home-mountains img');
const title = document.querySelector('h1');

const tl = gsap.timeline();

tl
.to(longMountains, {
  y: 200,
  scrollTrigger: {
    trigger: longMountains,
    scrub: true,
    start: 'top center-=200',
    //markers: true
  }
})
.to(title, {
  y: 350,
  scrollTrigger: {
    trigger: title,
    start: 'top center-=200',
    scrub: true,
    markers: true
  }
})

