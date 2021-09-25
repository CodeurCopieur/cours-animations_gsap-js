const img1 = document.querySelector('.container-images img:nth-child(1)');
const img2 = document.querySelector('.container-images img:nth-child(2)');
const img3 = document.querySelector('.container-images img:nth-child(3)');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');

const tl = gsap.timeline();

/*tl
  .to(img1, {y: 50})
  .to(img2, {y: 50})
  .to(img3, {y: 50})*/


tl
  .to(img1, {autoAlpha: 1, y: 0})
  .to(img2, {autoAlpha: 1, y: 0})
  .to(img3, {autoAlpha: 1, y: 0})
  .to(title, {autoAlpha: 1, y: 0})
  .to(txt, {autoAlpha: 1, y: 0})