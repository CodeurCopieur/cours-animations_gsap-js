// methode .to() -> aller de A à B (état finale)
const img1 = document.querySelector('.container-images img:nth-child(1)');
const bntCat = document.querySelector('.cat-fade');
const bntEasings = document.querySelector('.btn-easings');

/*gsap.to( img1, {
  x: 100, y:100, scale:2, duration: 2
});*/

gsap.to( '.title', {
  color: 'red',duration: 1  
});


// methode .from() -> le point A avant l'état finale (B) mais bug sur cet methode

bntCat.addEventListener('click', ()=> {
  /*gsap.from( img1, {
    opacity: 0, duration: 3
  });*/

  // Pour résoudre le bug
  //gsap.fromTo( img1, {opacity: 0}, {opacity: 1, duration: 3});
  
  //delay, repeat, repeatDelay
  gsap.to( 'h1', {x: 100, y:100, scale:1.2, duration: 2, delay: 2, repeat:1, repeatDelay: 2});
});


// easings et stagger


  bntEasings.addEventListener('click', ()=> {
    gsap.to('.container-images img', {y: 100, scale: 1.2, duration: 2, ease:"back.out(4)", stagger:
        { //amount: 1 OU
          each: .5,
        from: "center" }  /*OU
        index => {
          return index * .5
        }*/
    });

  // OU stagger: 0.4
  });

gsap.to('.container-images img', {duration: .2, x: 50, stagger: .2});

// la fonction random
gsap.to( '.btn', {
  duration: .2, x: "random(-100,100)", ease:"power4", stagger: .2
});


// Utiliser un key frames

gsap.to( '.txt',
  {keyframes: [
    {duration: .3, y: 50},
    {duration: .3, scale: 1.3},
    {duration: .3, y: 100}
  ]});