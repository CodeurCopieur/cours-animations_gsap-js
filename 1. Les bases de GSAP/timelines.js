const img1 = document.querySelector('.container-images img:nth-child(1)');
const img2 = document.querySelector('.container-images img:nth-child(2)');
const img3 = document.querySelector('.container-images img:nth-child(3)');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');

const tl = gsap.timeline();

/*
  tl
  .to(img1, {y: 50})
  .to(img2, {y: 50})
  .to(img3, {y: 50})
*/


tl
  .to(img1, {autoAlpha: 1, y: 0, duration: 1})
  .to(img2, {autoAlpha: 1, y: 0, duration: 1}, '>')
  .to(img3, {autoAlpha: 1, y: 0, duration: 1})
  .to(title, {autoAlpha: 1, y: 0, duration: 1})
  .to(txt, {autoAlpha: 1, y: 0, duration: 1})

// 3ieme paramètre
  /*  0 (veux dire t0) : signifie que img3 va s'afficher en même temps que img1
    '-=.75' : img2 va s'affichier .25s apres img 1 (  1(durée) - .75 = .25)
    ou +=.75

    '<' tu demares au même moment que le tween précédent ou '<.5' .5s après le tween précédent
    '>' tu demares à la fin dutween précédent
   */
