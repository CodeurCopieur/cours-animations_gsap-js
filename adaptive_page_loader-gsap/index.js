let counter = {
  value: 0
};

const loaderNumber = document.querySelector('.loader_number');
const loader = document.querySelector('.loader');
const loaderTop = document.querySelector('.loader_top');
const loaderBottom = document.querySelector('.loader_bottom');

function updateLoaderText() {
  let progress = Math.round(counter.value)
  loaderNumber.textContent = progress;
}

let loaderDuration = 7;
// https://greensock.com/docs/v3/Eases
let customEase = "M0,0 C0.11,0.494 0.241,0.372 0.398,0.472 0.546,0.566 0.524,0.776 0.708,0.854 0.788,0.887 0.889,0.941 1,1";

// si n'est pas la premiere visite on redéfinis loaderDuration, value
if (sessionStorage.getItem('visited') !== null) {
  loaderDuration = 2;
  counter.value = 75;
}
sessionStorage.setItem('visited', 'true');

function endLoaderAnimation() {

  const tlEnd = gsap.timeline();
  tlEnd
       .to(loaderTop, {autoAlpha: 1, y: '-100%', duration: 1})
       .to(loaderBottom, {autoAlpha: 1, y: '100%', duration: 1}, '-=.75')
       .to(loader, {autoAlpha: 0, dispaly: 'none', duration: 1}, '-=.75')
}

let tl = gsap.timeline({onComplete: endLoaderAnimation});
tl.to(counter, {
  onUpdate: updateLoaderText,
  value: 100,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});

tl.to(".loader_progress", {
  width: "100%",
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
}, 0);