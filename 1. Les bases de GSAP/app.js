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
  gsap.to( img1, {x: 100, y:100, scale:2, duration: 2, delay: 2, repeat:1, repeatDelay: 2});
});




bntEasings.addEventListener('click', ()=> {
  gsap.to('.container-images img', {y: 100, scale: 1.2, duration: 2, ease:"back.out(4)"});
});