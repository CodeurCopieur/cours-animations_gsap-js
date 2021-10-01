const allNavLinks = document.querySelectorAll('nav a');
const allNavImgs = document.querySelectorAll('nav img');
const title = document.querySelectorAll('h1');
const middleLine = document.querySelectorAll('.middle-line');
const grapeLogo = document.querySelectorAll('.home-content img');
const homeBtn = document.querySelectorAll('.home-content button');

window.addEventListener('load', initAnim);

function initAnim () {

  const tl = gsap.timeline();

  tl
  .to(title, {autoAlpha: 1, y:0, delay: .2})
  .to(middleLine, {height:200}, '-=.2')
  .to(grapeLogo, {autoAlpha: 1, y:0}, '-=.2')
  .to(homeBtn, {autoAlpha: 1, y:0}, '-=.2')
  .to(allNavLinks, {autoAlpha: 1, y:0,duration: .4, stagger: .1}, '-=.2')
  .to(allNavImgs, {autoAlpha: 1, y:0})
}

