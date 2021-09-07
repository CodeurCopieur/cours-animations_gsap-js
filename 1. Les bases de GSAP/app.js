// methode .to() -> aller de A a B
const img1 = document.querySelector('.container-images img:nth-child(1)');

console.log(img1, gsap);

gsap.to( img1, {
  x: 100, y:100, scale:2, duration: 2
})

gsap.to( '.title', {
  color: 'red',duration: 1  
})