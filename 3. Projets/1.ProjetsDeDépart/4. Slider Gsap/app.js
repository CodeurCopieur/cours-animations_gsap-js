const btnRight = document.querySelector('.btn-next');
const btnLeft = document.querySelector('.btn-prev');
const container = document.querySelector('.container');
const allSlides = Array.from(document.querySelectorAll('.slide'));
const indiceIndex = document.querySelector('.counter span:nth-child(1)');

let i = 0;

animRight = () => {
  const tlRight = gsap.timeline();

  tlRight
  .set( indiceIndex, { innerText: i + 1})
  .to(allSlides[i], {duration: .6, x: 0})
}

animLeft = () => {
  const tlLeft = gsap.timeline();

  tlLeft
  .set( indiceIndex, { innerText: i })
  .to(allSlides[i], {duration: .6, x: '-100%'})
}

const negation = gsap.to(container, {
  pause: true,
  keyframes: [
    {duration: .1, x: -4},
    {duration: .1, x: 4},
    {duration: .1, x: -4},
    {duration: .1, x: -0},
  ]
})

handleDirection = direction => {

  if(direction === "next") {

    if( i === 2) {
      negation.seek(0)
      negation.play()
      return;
    }
  
    i++;
    animRight()

  } else if (direction === "prev") {

    if( i === 0) {
      negation.seek(0)
      negation.play()
      return;
    }
  
    animLeft()
    i--;

  }
}

btnRight.addEventListener('click', ()=> {
  handleDirection('next');
})

btnLeft.addEventListener('click', ()=> {
  handleDirection('prev');
})