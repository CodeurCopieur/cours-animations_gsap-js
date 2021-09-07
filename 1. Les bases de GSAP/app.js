// methode .to() -> aller de A à B (état finale)
const img1 = document.querySelector('.container-images img:nth-child(1)');
const bntCat = document.querySelector('.cat-fade');


gsap.to( img1, {
  x: 100, y:100, scale:2, duration: 2
});

gsap.to( '.title', {
  color: 'red',duration: 1  
});


// methode .from() -> le point A avant l'état finale (B) mais bug sur cet methode

bntCat.addEventListener('click', ()=> {
  gsap.from( img1, {
    opacity: 0, duration: 3
  });
  
})